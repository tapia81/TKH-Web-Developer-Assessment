const taskItem = require("../models/todoTask");

const createTask = async (req, res) => {
  try {
    const createdTask = await new taskItem(req.body);
    await createdTask.save();
    return res.status(201).json({ createdTask });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const findAllTasks = async (req, res) => {
  try {
    const tasks = await taskItem.find({});
    return res.json({ tasks });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const findTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const taskFound = await taskItem.findById(id);
    if (taskFound) {
      return res.status(201).json({ taskFound });
    } else {
      return res.status(404).send(`A task with ID ${id} is not found`);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateTaskById = (req, res) => {
  try {
    const { id } = req.params;
    taskItem.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, updatedTask) => {
        if (err) {
          res.status(500).json({ error: err.message });
        }
        if (!updatedTask) {
          res.status(404).send("Task not found");
        }
        return res.status(200).json(updatedTask);
      }
    );
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await taskItem.findByIdAndDelete(id);
    if (deletedTask) {
      return res.status(201).send(`Task with id ${id} deleted successfully`);
    } else {
      return res.status(404).send(`A task with ID ${id} is not found`);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  findAllTasks,
  findTaskById,
  updateTaskById,
  deleteTaskById,
};
