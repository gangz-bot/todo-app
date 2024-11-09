import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        style={{
          marginLeft: "10px",
          padding: "5px 10px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
