import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stet, appState] = useState(1);
  function increment() {
    appState(stet + 1);
    if (stet % 10 == 0) {
      // appState(10);
      alert("Marra");
    }
  }
  function decrement() {
    appState(stet - 1);
    if (stet == 1) {
      appState(stet);
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="btn_group">
          <h1>Natija:{stet}</h1>
          <button className="btn_red" onClick={increment}>
            Next
          </button>
          <button className="btn_black" onClick={decrement}>
            Prev
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
