let tasks = [];
let nextId = 1;

exports.getAll = () => tasks;

exports.getById = (id) => tasks.find((task) => task.id === id);

exports.create = (title, description) => {
  const task = { id: nextId++, title, description };
  tasks.push(task);
  return task;
};

exports.update = (id, title, description) => {
  const task = tasks.find((task) => task.id === id);
  if (!task) return null;
  if (!title || !description) return false;

  task.title = title;
  task.description = description;
  return task;
};

exports.delete = (id) => {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};
