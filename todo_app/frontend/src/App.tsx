const App = () => {
  return (
    <div className="container">
      <h1>Note Aplication</h1>
      <div>
        <input type="text" className="input" placeholder="Title"/>
      </div>
      <div>
        <textarea className="textarea" placeholder="Description"></textarea>
      </div>
    </div>
  );
};

export default App;
