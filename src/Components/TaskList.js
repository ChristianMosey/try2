import React, {Component, useEffect, useState} from "react";
import { Button } from "semantic-ui-react";

class TaskList extends Component {
    constructor() {
        super();

        this.state = {
            tasks: [],
            loaded: false,
            days: [1,1,1,1,1,1,1]
        }
    }

    clickHandeler(index) {
        let replacement = !this.state.days[index]
        let temp = this.state.days
        temp[index] = replacement
        this.setState({days: temp, loaded: false})
    }

    fetchTask(){
        fetch("http://localhost:8000/tasks")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                //console.log(data)
                this.setState({tasks: data, loaded: true});
            });
    }

    renderHelper(tasks, day){
        console.log(tasks)
        if (tasks.length === 0){
            return(
                <div>
                </div>
            )
        }
        return(
        <div style={{display: "inline-block", verticalAlign: "top", alignContent: "start"}}>
            <p style={{fontSize: 50, margin: "0 50px 0"}}>{day}</p>
            {tasks.map((task) =>
                <div key={task.id}>
                    <p>{task.name}</p>
                </div>)}
        </div>)
    }

    dayFilter(){
        let mon = []
        let tues = []
        let wed = []
        let thurs = []
        let fri = []
        let sat = []
        let sun = []
        for (let i = 0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].week[0] && this.state.days[0]){
                mon.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[1] && this.state.days[1]){
                tues.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[2] && this.state.days[2]){
                wed.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[3] && this.state.days[3]){
                thurs.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[4] && this.state.days[4]){
                fri.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[5] && this.state.days[5]){
                sat.push(this.state.tasks[i])
            }
            if (this.state.tasks[i].week[6] && this.state.days[6]){
                sun.push(this.state.tasks[i])
            }
        }
        let output = [mon, tues, wed, thurs, fri, sat, sun]
        return output;
    }
    render(){
        console.log("refreshed")
        if (!this.state.loaded) {
            this.fetchTask()
        }
        if (this.state.loaded) {
            let toPrint = this.dayFilter()
            return (
                <div className={"App"}>
                    <Button.Group>
                        <Button toggle active={this.state.days[0]} onClick={() => {this.clickHandeler(0)}}>
                            Mon
                        </Button>
                        <Button toggle active={this.state.days[1]} onClick={() => {this.clickHandeler(1)}}>
                            Tues
                        </Button>
                        <Button toggle active={this.state.days[2]} onClick={() => {this.clickHandeler(2)}}>
                            Wed
                        </Button>
                        <Button toggle active={this.state.days[3]} onClick={() => {this.clickHandeler(3)}}>
                            Thurs
                        </Button>
                        <Button toggle active={this.state.days[4]} onClick={() => {this.clickHandeler(4)}}>
                            Fri
                        </Button>
                        <Button toggle active={this.state.days[5]} onClick={() => {this.clickHandeler(5)}}>
                            Sat
                        </Button>
                        <Button toggle active={this.state.days[6]} onClick={() => {this.clickHandeler(6)}}>
                            Sun
                        </Button>
                    </Button.Group><br/>
                    {this.renderHelper(toPrint[0], "Monday")}
                    {this.renderHelper(toPrint[1], "Tuesday")}
                    {this.renderHelper(toPrint[2], "Wednesday")}
                    {this.renderHelper(toPrint[3], "Thursday")}
                    {this.renderHelper(toPrint[4], "Friday")}
                    {this.renderHelper(toPrint[5], "Saturday")}
                    {this.renderHelper(toPrint[6], "Sunday")}
                </div>
            )
        }
        else{
            return (
                <div>
                    <body>
                    <Button.Group>
                        <Button toggle active={this.state.days[0]} onClick={() => {this.clickHandeler(0)}}>
                            Mon
                        </Button>
                        <Button toggle active={this.state.days[1]} onClick={() => {this.clickHandeler(1)}}>
                            Tues
                        </Button>
                        <Button toggle active={this.state.days[2]} onClick={() => {this.clickHandeler(2)}}>
                            Wed
                        </Button>
                        <Button toggle active={this.state.days[3]} onClick={() => {this.clickHandeler(3)}}>
                            Thurs
                        </Button>
                        <Button toggle active={this.state.days[4]} onClick={() => {this.clickHandeler(4)}}>
                            Fri
                        </Button>
                        <Button toggle active={this.state.days[5]} onClick={() => {this.clickHandeler(5)}}>
                            Sat
                        </Button>
                        <Button toggle active={this.state.days[6]} onClick={() => {this.clickHandeler(6)}}>
                            Sun
                        </Button>
                    </Button.Group>
                    <p>Loading...</p>

                    </body>
                </div>
            )
        }
    }
}

export default TaskList;
