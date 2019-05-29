import React from 'react'

const ToDoForm = props => {
    return(
        <div>
            <form onSubmit={props.addTask}>
                <input placeholder="Task"
                onChange={props.taskInput}
                value={props.task}
                name="task"
                />
                {props.error && <p>{props.error}</p>}
            </form>
            <button onClick={props.addTask}>Add Task</button>
            <button onClick={props.removeTasks}>Remove Tasks</button>
        </div>
        
    )
}


export default ToDoForm;