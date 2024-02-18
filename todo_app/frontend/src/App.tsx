import NoteItem from "./components/NoteItem";
import React, { useState, ChangeEventHandler, useEffect } from "react";
import axios from "axios";
import { describe } from "node:test";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [count, setCount] = useState(0);
  const [notes, setNotes] = useState<
    {
      id: string;
      title: string;
      description?: string;
    }[]
  >([]);

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target }) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    console.log("i am running");
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
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
        <div>
          <span>{count}</span>
          <button type = "button" onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
        <h1 className=" font-semibold text-2xl text-center">Note Aplication</h1>
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
        return <NoteItem key={note.title} title={note.title} />;
      })}
    </div>
  );
};

export default App;
