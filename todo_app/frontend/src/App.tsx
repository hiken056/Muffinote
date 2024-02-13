const App = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-5 space-y-6">
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
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md">Submit</button>
      </div>


      {/* Note Items */} 
      <div>
        <p className="font-semibold text-gray-700 text-lg">Lorem ipsum dolor sit amet.</p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white p-2 rounded"  >View</button>
          <button className="bg-gray-700 text-white p-2 rounded" >Edit</button>
          <button className="bg-red-500 text-white p-2 rounded" >Delete</button>
        </div>
      </div>
    </div>
  );
};

export default App;
