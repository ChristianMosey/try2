import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import TaskList from "./components/TaskList.js";



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
      {tasks && <TaskList tasks={tasks} />}
      </div>
    </div>
  );
}

export default App;
