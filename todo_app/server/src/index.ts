// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,
//  npm i @types/node --save-dev, npm run dev (to run), npm i mongoose, npm i -D @types/mongoose

import { ChildProcess } from "child_process";
import { error } from "console";
import exp from "constants";
import express from "express";
import "./db";
import Note, { NoteDocument } from "./models/node";

const app = express(); //express object

//using the same MIDDLEWARE FUNCTION FOR EVERY ENDPOINT

//MIDDLEWARE FUNTION

//this will parse post request coming from fetch.post() method
app.use(express.json());

//this will parse post request coming from html form
app.use(express.urlencoded({ extended: false }));

//MIDDLEWARE FUNTION - cum funtioneaza
/* app.use((req, res, next) => {
    //read the data that we want to add to req.body

    req.on("data", (chunk) => {
      //manipulate this here
      req.body = JSON.parse(chunk);
      next();
    });
  })
 */

app.post(
  "/",
  // next() => move to next funtion

  (req, res) => {
    //get method (route, request, response)
    //res.send('<h1>Hello World</h1>')

    //here we need data so that we can create new note/todo
    console.log(req.body);
    res.json({ message: "I am listening!" });
  }
);

interface incomingBody {
  title: string;
  description?: string;
}

app.post("/create", async (req, res) => {
  //get method (route, request, response)
  //res.send('<h1>Hello World</h1>')

  //here we need data so that we can create new note/todo
  // const newNote = new Note<NoteDocument>({
  //   title: (req.body as incomingBody).title,
  //   description: (req.body as incomingBody).description,
  // });
  // await newNote.save()

  await Note.create<NoteDocument>({
    title: (req.body as incomingBody).title,
    description: (req.body as incomingBody).description,
  });

  res.json({ message: "I am listening! to create" });
});

app.patch("/:noteId", async (req, res) => {
  const {noteId} = req.params;
  const note = await Note.findById(noteId)
  if (!note) return res.json({error: "Note not found!"});

  const {title, description} = req.body as incomingBody
  if (title) note.title = title;
  if (description) note.description = description;

  await note.save()

  res.json ({note});
})

// LISTEN TO SOME PORT

app.listen(8000, () => {
  //8000-port
  console.log("listening");
});

//tsc (compiling ts file)
//node index.js (running js file)
