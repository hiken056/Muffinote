import NoteItem from "./components/NoteItem";
import React, { useState, ChangeEventHandler, useEffect } from "react";
import axios from "axios";
import { describe } from "node:test";

type noteType = {
  id: string;
  title: string;
  description?: string;
};

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [count, setCount] = useState(0);
  const [noteToView, setNoteToView] = useState<noteType>();
  const [notes, setNotes] = useState<noteType[]>([]);

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const [selectedNoteId, setSelectedNoteId] = useState<any | null>(null);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      //call the api and fetch notes
      const { data } = await axios("http://localhost:8000/note");
      setNotes(data.notes);
    };
    fetchNotes();
  }, []);

  return (
    <div className="">
      <div className="  max-w-3xl mx-auto space-y-6">
        <form
          onSubmit={async (evt) => {
            evt.preventDefault();

            if (selectedNoteId) {
              //thann we want to update
              const { data } = await axios.patch(
                "http://localhost:8000/note/" + selectedNoteId,
                {
                  title: values.title,
                  description: values.description,
                }
              );
              const updatedNotes = notes.map((note) => {
                if (note.id == selectedNoteId) {
                  note.title = data.note.title;
                  note.description = data.note.description;
                }
                return note;
              });

              setValues({ title: "", description: "" });
              setNotes([...updatedNotes]);
              return;
            }
            const { data } = await axios.post(
              "http://localhost:8000/note/create",
              {
                title: values.title,
                description: values.description,
              }
            );
            setNotes([data.note, ...notes]);
            setValues({
              title: "",
              description: "",
            });
          }}
          className=" space-y-6  bg-white shadow-md rounded p-5"
        >
          <h1 className=" font-semibold text-2xl text-center font-bold">
            Muffinote
          </h1>
          <div>
            <input
              type="text"
              className="w-full border-b-2 border-gray-700 outline-none"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
              name="title"
            />
          </div>

          <div>
            <textarea
              className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>

        {notes.map((note) => {
          return (
            <NoteItem
              onViewClick={() => {
                setNoteToView(note);
                if (noteToView) {
                  setNoteToView(undefined);
                } else {
                  setNoteToView(note);
                }
              }}
              description={
                noteToView?.id === note.id ? noteToView?.description : ""
              }
              onEditClick={() => {
                setSelectedNoteId(note.id);
                setValues({
                  title: note.title,
                  description: note.description || "",
                });
              }}
              onDeleteClick={async () => {
                const result = confirm("Are you sure?");
                if (result) {
                  //delete
                  await axios.delete("http://localhost:8000/note/" + note.id);

                  const updatedNotes = notes.filter(({ id }) => id !== note.id);
                  setNotes([...updatedNotes]);
                }
              }}
              key={note.id}
              title={note.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
