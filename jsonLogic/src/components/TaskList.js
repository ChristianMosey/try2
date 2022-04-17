const TaskList = ({tasks}) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
            <div className="task-preview" key={task.id}>
                <h2>{ task.name} </h2>
                <p>{task.week}</p>
                <p>{task.id}</p>
            </div>
            ))}
        </div>
    );
}

export default TaskList;