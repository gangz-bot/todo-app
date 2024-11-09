import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  // Fetch all todos from backend
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // Add a new todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => res.json())
      .then((newTodo) => setTodos([...todos, newTodo]));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  // Toggle completed status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Active") return !todo.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => e.key === "Enter" && addTodo(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")} style={buttonStyle}>All</button>
        <button onClick={() => setFilter("Completed")} style={buttonStyle}>Completed</button>
        <button onClick={() => setFilter("Active")} style={buttonStyle}>Active</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

const buttonStyle = {
  padding: "10px",
  marginRight: "5px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#2196F3",
  color: "#fff",
};

export default TodoApp;
