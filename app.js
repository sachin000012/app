import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState();
  function clicked() {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );

    //console.log("button clicked");
  }

  return (
    <div id="main">
      <button id="click" onClick={clicked}>
        Click me
      </button>
      <h1 id="para">{para}</h1>
    </div>
  );
}

export default App;
