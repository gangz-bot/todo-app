const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = "data.json";

// Get all todos
app.get("/todos", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  res.json(data);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const newTodo = { id: Date.now(), ...req.body };
  data.push(newTodo);
  fs.writeFileSync(filePath, JSON.stringify(data));
  res.status(201).json(newTodo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const updatedData = data.filter((todo) => todo.id !== parseInt(req.params.id));
  fs.writeFileSync(filePath, JSON.stringify(updatedData));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
