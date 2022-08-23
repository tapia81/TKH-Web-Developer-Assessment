const mongoose = require("mongoose");

const taskSchema = mongoose.Schema;

const taskModel = new taskSchema(
  {
    taskDescription: {
      type: String,
      required: true,
    },
    taskCompleted: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const todoTaskModel = mongoose.model("tasks", taskModel);

module.exports = todoTaskModel;
