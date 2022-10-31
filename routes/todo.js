const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo");

router.post("/tasks", (request, response) => {
    todoController.createTask(request.body, response);
});

router.get("/tasks", (request, response) => {
    todoController.listTasks(response);
});

router.get("/tasks/:id", (request, response) => {
    const { id } = request.params;
    todoController.getTask(id, response);
});

router.put("/tasks", (request, response) => {
    todoController.updateTask(request.body, response);
});

router.delete("/tasks/:id", (request, response) => {
    const { id } = request.params;
    todoController.deleteTask(id, response);
});

module.exports = router;