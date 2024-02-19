import React from 'react';
import classes from './List.css'
import {Button} from "../button/Button";

const List = ({tasks, handleDelete}) => {
  return (
    <ul>
      {tasks.map(task => (
        <li className={classes.tasks} key={task.id}>
          {`${task.id} ${task.completed ? <s>{task.title}</s> : task.title}`}
          <Button text={'delete'} onClick={()=>handleDelete(task.id)}/>
        </li>
      ))}
    </ul>
  );
};

export default List;
