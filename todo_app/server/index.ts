// CREATE A SERVER

//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,  npm i @types/node --save-dev

import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!!</h1>')
})

// LISTEN TO SOME PORT

app.listen(8000, () => {
    console.log("listening");
});