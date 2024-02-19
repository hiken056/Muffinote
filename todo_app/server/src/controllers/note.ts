import { RequestHandler } from "express";
import Note, { NoteDocument } from "../models/node";
import { title } from "process";

export interface incomingBody {
  title: string;
  description?: string;
}

export const create: RequestHandler = async (req, res) => {
  //get method (route, request, response)
  //res.send('<h1>Hello World</h1>')

  //here we need data so that we can create new note/todo
  const newNote = new Note<NoteDocument>({
    title: (req.body as incomingBody).title,
    description: (req.body as incomingBody).description,
  });
  await newNote.save()

  // await Note.create<NoteDocument>({
  //   title: (req.body as incomingBody).title,
  //   description: (req.body as incomingBody).description,
  // });

  res.json({
    note: {
      id: newNote._id,
      title: newNote.title,
      description: newNote.description
    },
  });
};

export const updateSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  // const note = await Note.findById(noteId)
  // if (!note) return res.json({error: "Note not found!"});

  const { title, description } = req.body as incomingBody;
  // if (title) note.title = title;
  // if (description) note.description = description;

  const note = await Note.findByIdAndUpdate(
    noteId,
    { title, description },
    { new: true }
  );
  if (!note) return res.json({ error: "Note not found!" });
//  await note.save();

  res.json({ note: {id: note._id, title: note.title, description: note.description}});
};

export const removeSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;

  const removedNote = await Note.findByIdAndDelete(noteId);
  if (!removedNote) return res.json({ error: "Couldn't remove note" });
  res.json({ message: "Note removed succesfully!" });
};

export const readAllNotes: RequestHandler = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes: notes.map((note) => {
    return {
      id: note._id,
      title: note.title,
      description: note.description
    }
  }) });
};

export const readSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);

  if (!note) return res.json("errror: Note not found!");
  res.json({ note });
};
