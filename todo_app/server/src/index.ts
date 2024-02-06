// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,  npm i @types/node --save-dev

import express from 'express'

const app = express(); //express object

app.get('/', (request, response) => { //get method (route, request, response)
    response.send('<h1>Hello World!!</h1>')
});

// LISTEN TO SOME PORT

app.listen(8000, () => { //8000-port
    console.log("listening"); 
});

//tsc (compiling ts file)
//node index.js (running js file)