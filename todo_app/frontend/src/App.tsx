import NoteItem from "./components/NoteItem";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className=" space-y-6  bg-white shadow-md rounded p-5">
        <h1 className=" font-semibold text-2xl text-center">Note Aplication</h1>
        <div>
          <input
            type="text"
            className="w-full border-b-2 border-gray-700 outline-none"
            placeholder="Title"
          />
        </div>



        <div>
          <textarea
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white px-5 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>

      <NoteItem title="My first re-usable component"/>

      <NoteItem title="Lorem"/>

      <NoteItem title="YAsss"/>

      <NoteItem title="biscuiti"/>

      
    </div>
  );
};

export default App;
