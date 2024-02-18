// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,
//  npm i @types/node --save-dev, npm run dev (to run), npm i mongoose, npm i -D @types/mongoose

import { ChildProcess } from "child_process";
import { error } from "console";
import exp from "constants";
import express from "express";
import "./db";
import Note, { NoteDocument } from "./models/node";
import { create, readAllNotes, readSingleNote, removeSingleNote, updateSingleNote } from "./controllers/note";
import noteRouter from './routers/note'
import cors from 'cors'


const app = express(); //express object

app.use(cors());

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


app.use("/note", noteRouter); 
// LISTEN TO SOME PORT

app.listen(8000, () => {
  //8000-port
  console.log("listening");
});
