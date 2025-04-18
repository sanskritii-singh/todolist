import React from "react";

function TodoItem({ task, deleteTask }) {
  return (
    <li className="todo-item">
      <span>{task}</span>
      <button className="delete-btn" onClick={deleteTask}>❌</button>
    </li>
  );
}

export default TodoItem;