import React, { Component } from "react";
import { useEffect, useState } from "react";

const ViewList = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="content">{tasks && <TaskList tasks={tasks} />}</div>
    </div>
  );
};

export default ViewList;
