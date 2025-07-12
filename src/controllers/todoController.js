const Todo = require("../models/Todo");

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;
    const todo = new Todo({ title, description, dueDate, status });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to create todo" });
  }
};

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to fetch todos" });
  }
};

// Get a specific todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to fetch todo" });
  }
};

// Update a todo (only status and description allowed)
exports.updateTodo = async (req, res) => {
  try {
    const { description, status } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { description, status },
      { new: true }
    );
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to update todo" });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error: Unable to delete todo" });
  }
};
