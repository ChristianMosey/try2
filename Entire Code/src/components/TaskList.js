import React, { Component } from "react";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h1>YOUR SCHEDULE: </h1>

      {tasks.map((task) => (
        <div className="task-preview" key={task.id}>
          <h2>{task.name} </h2>
          <p>{task.week}</p>
          <p>{task.id}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
