import { create, readAllNotes, readSingleNote, removeSingleNote, updateSingleNote } from "../controllers/note";

const { Router } = require("express");

const router = Router();

router.post("/create", create);

router.patch("/:noteId", updateSingleNote) 


router.delete("/:noteId", removeSingleNote)

//get all the notes
router.get("/", readAllNotes)

//get note by id
router.get("/:id", readSingleNote);



export default router;
