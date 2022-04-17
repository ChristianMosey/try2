import './App.css';
import React, { Component, useEffect, useState } from 'react';
import TaskList from "./components/TaskList.js";
import CreatePlanner from "./components/CreatePlanner";



function App() {
  const[tasks, setTasks] = useState(null);

  useEffect(() => {
      fetch('http://localhost:8000/tasks')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTasks(data);
      })

  }, [])

  return (
    <div className="App">
      <div className="content">
        <CreatePlanner></CreatePlanner>
      {tasks && <TaskList tasks={tasks} />}
      </div>
    </div>
  );
}

export default App;
