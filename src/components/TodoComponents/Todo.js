import React from 'react';
import './Todo.css';

export const toDos = [];

  export const ToDo = props => {
    // some javascript
      return (
        <div className="thing-to-do">
          <div className="task-info">
            <h2 className={props.thingOnProps.completed ? 'completed' : ''} onClick={() => props.taskCompleted(props.thingOnProps.id)}>Task : {props.thingOnProps.task}</h2>
          </div>
        </div>
      );
    };