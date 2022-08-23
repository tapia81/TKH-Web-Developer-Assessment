const db = require("../db/index");
const taskModel = require("../models/todoTask");

db.on("error", console.error.bind(console, "connection error:"));

const pushSeedData = async () => {
  const tasks = [
    {
      taskDescription: "Finish coding the backend",
      taskCompleted: false,
    },
    {
      taskDescription: "Finish coding the front-end",
      taskCompleted: false,
    },
  ];
  await taskModel.deleteMany({});
  await taskModel.insertMany(tasks);
  console.log("Uploaded seed data");
};

const run = async () => {
  await pushSeedData();
  db.close();
};

run();
