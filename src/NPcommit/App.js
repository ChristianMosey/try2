import "./App.css";
import Navbar from "./components/Navbar";
import CreatePlanner from "./components/CreatePlanner";
import React from "react"

function App() {
  const title = "Page to create schedule**";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <h1>{title}</h1>
        <CreatePlanner></CreatePlanner>
      </div>
    </div>
  );
}

export default App;
