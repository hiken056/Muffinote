// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,  npm i @types/node --save-dev

import exp from 'constants';
import express from 'express'

const app = express(); //express object

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/', (req, res) => { //get method (route, request, response)
    //res.send('<h1>Hello World</h1>')

    //here we need data so that we can create new note/todo
    console.log(req.body)
    res.json({message: "I am listening!"})
});

// LISTEN TO SOME PORT

app.listen(8000, () => { //8000-port
    console.log("listening"); 
});

//tsc (compiling ts file)
//node index.js (running js file)