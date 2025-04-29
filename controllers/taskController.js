const TaskModel = require("../models/taskModel");

// GET /tasks
exports.getAllTasks = (req, res) => {
  res.status(200).json(TaskModel.getAll());
};

// GET /tasks/:id
exports.getTaskById = (req, res) => {
  const task = TaskModel.getById(parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.status(200).json(task);
};

// POST /tasks
exports.createTask = (req, res) => {
  console.log("Body received:", req.body);
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }
  const newTask = TaskModel.create(title, description);
  res.status(201).json(newTask);
};

// PUT /tasks/:id
exports.updateTask = (req, res) => {
  const { title, description } = req.body;
  const updated = TaskModel.update(parseInt(req.params.id), title, description);
  if (updated === null)
    return res.status(404).json({ error: "Task not found" });
  if (updated === false)
    return res.status(400).json({ error: "Invalid input" });
  res.status(200).json(updated);
};

// DELETE /tasks/:id
exports.deleteTask = (req, res) => {
  const deleted = TaskModel.delete(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Task not found" });
  res.status(204).send();
};
