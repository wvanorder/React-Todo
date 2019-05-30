import React from 'react';
import './Todo.scss';

export const toDos = [];

  export const ToDo = props => {
    // some javascript
    const completion = props.thingOnProps.completed ? 'completed' : '';
    const matching = props.thingOnProps.match ? '' : 'hidden';
      return (
       
            <h2 className={`${completion} ${matching}` } onClick={() => props.taskCompleted(props.thingOnProps.id)}>{props.thingOnProps.task}</h2>
       
      );
    };