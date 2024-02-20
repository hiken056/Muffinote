import { error } from "console";
import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/note-app').then
(() => {
    console.log("connection succesful");
}).catch((error) => {
    console.log("connection failed: ", error);
})