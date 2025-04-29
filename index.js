const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks"); //  Fix: import routes
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task API is running. Use /tasks endpoint.");
});

app.use("/tasks", taskRoutes); // Mount the routes correctly

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
