import React from "react";
import Calender from "../Components/Calender";
import TaskList from "../Components/TaskList";

const CalenderPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p style={{fontSize: 70, margin: "0 0 15px"}}>Your Schedule:</p>
            <TaskList></TaskList>
            </header>
        </div>
    );
}

export default  CalenderPage;