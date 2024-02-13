import React from 'react';
import classes from './List.css'

const List = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li className={classes.tasks} key={task.id}>
          {`${task.id} ${task.completed ? <s>{task.title}</s> : task.title}`}
        </li>
      ))}
    </ul>
  );
};

export default List;
