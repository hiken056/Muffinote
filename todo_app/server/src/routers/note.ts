import { create, readAllNotes, readSingleNote, removeSingleNote, updateSingleNote } from "../controllers/note";

const { Router } = require("express");

const router = Router();

router.post("/note/create", create);

router.patch("/note/:noteId", updateSingleNote)


router.delete("/note/:noteId", removeSingleNote)

//get all the notes
router.get("/note/", readAllNotes)

//get note by id
router.get("/note/:id", readSingleNote);



export default router;
