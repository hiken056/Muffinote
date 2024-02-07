// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,  npm i @types/node --save-dev

import { ChildProcess } from "child_process";
import exp from "constants";
import express from "express";

const app = express(); //express object

//app.use(express.json());
//app.use(express.urlencoded({extended: false}));

//using the same MIDDLEWARE FUNCTION FOR EVERY ENDPOINT

//MIDDLEWARE FUNTION
app.use((req, res, next) => {
    //read the data that we want to add to req.body

    req.on("data", (chunk) => {
      //manipulate this here
      req.body = JSON.parse(chunk);
      next();
    });
  })

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

app.post("/create", (req, res) => {
  //get method (route, request, response)
  //res.send('<h1>Hello World</h1>')

  //here we need data so that we can create new note/todo
  console.log(req.body);
  res.json({ message: "I am listening! to create" });
});

// LISTEN TO SOME PORT

app.listen(8000, () => {
  //8000-port
  console.log("listening");
});

//tsc (compiling ts file)
//node index.js (running js file)
