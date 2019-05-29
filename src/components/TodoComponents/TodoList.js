// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { toDos } from './Todo';
import { ToDo } from './Todo';

const TodoList = props => {
        return(
            <div className="toDo-list">
            {props.things.map(itemFromList => (
                <ToDo taskCompleted={props.taskCompleted} thingOnProps={itemFromList} />
            ))}
            </div>
        )
    }

export default TodoList;


