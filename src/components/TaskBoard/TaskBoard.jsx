import React, { useState } from 'react';
import styles from './TaskBoard.module.css';
import tasksData from '../../../tasks.json';
import Input from '../Input';

const TaskBoard = () => {
  const [tasks, setTasks] = useState(tasksData); 

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((taskObj) => taskObj.id !== id);
    setTasks(updatedTasks);
  };

  return (
<div className={styles.taskBoard}>
  <h2></h2>
  <ul className={styles.taskList}>
    <li className={styles.listItem}> 
        <Input></Input>
    {/* <button
          className={styles.addButton}
          type="button"
          onClick={() => handleDelete(taskObj.id)}
        >
          Add
        </button> */}
    </li>
    {tasks.map((taskObj) => (
      <li key={taskObj.id} className={styles.listItem}>
        <span>{taskObj.completed ? "yes " : "no "} {taskObj.task}</span>
        <button
          className={styles.deleteButton}
          type="button"
          onClick={() => handleDelete(taskObj.id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>
  );
};

export default TaskBoard;
