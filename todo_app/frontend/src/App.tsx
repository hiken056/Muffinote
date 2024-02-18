import NoteItem from "./components/NoteItem";
import React, { useState, ChangeEventHandler } from "react";

const App = () => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({target}) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className=" space-y-6  bg-white shadow-md rounded p-5">
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
          <button
            onClick={() => {
              console.log(values);
            }}
            className="bg-blue-500 text-white px-5 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>

      <NoteItem title="My first re-usable component" />

      <NoteItem title="Lorem" />

      <NoteItem title="YAsss" />

      <NoteItem title="biscuiti" />
    </div>
  );
};

export default App;
