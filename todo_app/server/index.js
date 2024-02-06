"use strict";
// CREATE A SERVER
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//comenzi pana aici: npm init, tsc --init, npm install express --save,  npm i @types/express --save-dev,  npm i @types/node --save-dev
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('<h1>Hello World!!</h1>');
});
// LISTEN TO SOME PORT
app.listen(8000, () => {
    console.log("listening");
});
