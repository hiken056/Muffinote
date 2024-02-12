import React from "react";
import "./App.css";


function App(props: {name:string}) {
  return (
      <div className = "App" onClick={() => console.log("you just clicked")}>
        <h1>Hello world! {props.name}</h1>
      </div>
  )

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hello World!")
  // );
}

export default App;
