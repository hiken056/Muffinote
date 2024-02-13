const App = () => {
  return (
    <div className = "w-[500px] mx-auto ">
      <h1 className=" font-semibold text-2xl text-blue-400">Note Aplication</h1>
      <div>
        <input type="text" className="" placeholder="Title"/>
      </div>
      <div>
        <textarea className="" placeholder="Description"></textarea>
      </div>
    </div>
  );
};

export default App;
