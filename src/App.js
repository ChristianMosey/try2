import "./App.css";
import Navbar from "./components/Navbar";
import CreatePlanner from "./components/CreatePlanner";
import React, { Component }  from 'react';

function App() {
  //http://localhost:3002
  const title = "Page to create schedule**";
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <CreatePlanner></CreatePlanner>
      </div>
    </div>
  );
}

export default App;
