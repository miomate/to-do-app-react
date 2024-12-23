import React, { useState } from "react";
import styles from "./Input.module.css";
import customData from "../../tasks.json"

const Input = () => {
  const [newTask, setNewTasks] = useState([customData ]);
  const [inputValue, setInputValue] = useState(""); // Track input field value

  const addNewTodo = () => {
    if (inputValue.trim().length < 4) {
      alert("Task must be at least 4 characters long!");
      setInputValue("");
      return;
    }

    const lastId = newTask.length > 0 ? newTask[newTask.length - 1].id : 0; // Get the last ID
    const newTodo = {
      id: lastId + 1,
      task: inputValue,
      completed: false,
    };

    setNewTasks([...newTask, customData]); // Add new task to the array
    setInputValue(""); // Clear input field
    console.log("New Task Added:", customData); // Debug
  };

  console.log(customData)

  return (
    <>
      <div className={styles.formgroup}>
        <input
          className={styles.formfield}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state on input
          required
          minLength="4"
          maxLength="66"
          placeholder="Type your ToDo..."
        />
        <button onClick={addNewTodo}>Add</button>
      </div>

      {/* Render the list of tasks */}
      {/* <ul>
        {newTask.map((taskObj) => (
          <li key={taskObj.id}>
            {taskObj.task} - {taskObj.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Input;
