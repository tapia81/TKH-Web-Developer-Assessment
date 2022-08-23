const controller = require("../controllers/index");
const { Router } = require("express");
const route = Router();

route.post("/", controller.createTask);
route.get("/", controller.findAllTasks);
route.get("/:id", controller.findAllTasks);
route.put("/:id", controller.updateTaskById);
route.delete("/:id", controller.deleteTaskById);

module.exports = route;
