const { query } = require("express");
const database = require("../configs/database/database");

class TodoModule {
    createTask = (task, response) => {
        const query = "INSERT INTO task (title, description) VALUES (?, ?)";
        const values = [task.title, task.description];
        const callback = (error, result) => {
            if(error) {
                response.status(500).send(error);
                return;
            }

            response.status(200).json({ message: "Task successfully addded."});
        };

        database.query(query, values, callback);
    };

    
    listTasks(response) {
        const query = "SELECT id, title, description, modified_at FROM task";
        const callback = (error, result) => {
            if(error) {
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, null, callback);
    };

    getTask(taskId, response) {
        const query = "SELECT id, title, description, modified_at FROM task WHERE id = ?";
        const values = [taskId];
        const callback = (error, result) => {
            if(error) {
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result[0]);
        };

        database.query(query, values, callback);
    };

    updateTask(task, response) {
        const query = "UPDATE task SET title = ?, description = ? WHERE id = ?";
        const values = [task.title, task.description, task.id];
        const callback = (error, result) => {
            if(error) {
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, values, callback);
    };

    deleteTask(taskId, response) {
        const query = "DELETE FROM task WHERE id = ?";
        const values = [taskId];
        const callback = (error, result) => {
            if(error) {
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, values, callback);
    };
}

module.exports = new TodoModule();