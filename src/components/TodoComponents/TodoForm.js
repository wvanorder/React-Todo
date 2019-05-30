import React from 'react'

const ToDoForm = props => {
    return(
        <div>
            <form onSubmit={props.addTask}>
                <input placeholder="Task"
                onChange={props.taskInput}
                value={props.task}
                name="task"
                required = 'Fill Me out'
                />
                <input placeholder ='search'
                value={props.searchTerm}
                onChange={props.taskInput}
                name="search"
                />
                {/* {props.error && <p>{props.error}</p>} */}
            </form>
            <button onClick={props.addTask}>Add Task</button>
            <button onClick={props.removeTasks}>Remove Tasks</button>
            
        </div>
        
    )
}


export default ToDoForm;