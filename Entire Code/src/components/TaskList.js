import React, { Component } from "react";


const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <p style={{fontSize: 50, margin: "0 10px 0"}}>YOURSCHEDULE: </p>

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
