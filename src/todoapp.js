import React, { useState } from "react";
import "./todoapp.css"; // Ensure this file is styled correctly

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`task ${task.completed ? "completed" : ""}`}
              onClick={() => toggleTask(index)}
            >
              {task.text}
              <button className="delete-btn" onClick={(e) => {
                e.stopPropagation(); // Prevent toggle when clicking delete
                removeTask(index);
              }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
