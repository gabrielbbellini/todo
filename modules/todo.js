const database = require("../configs/database/database");

const ModuleError = require('./moduleError')

class TodoModule {
    createTask = (task, response) => {
        const query = "INSERT INTO task (title, description) VALUES (?, ?)";
        const values = [task.title, task.description];
        const executeOnFinishQuery = (error, _) => {
            if(error) {
                const moduleError = new ModuleError(500, error.message || "Unexpected error.");
                response.status(500).send(moduleError);
                return;
            }

            response.status(200).json({ message: "Task successfully added."});
        };

        database.query(query, values, executeOnFinishQuery);
    };

    
    listTasks(response) {
        const query = "SELECT id, title, description, modified_at FROM task";
        const executeOnFinishQuery = (error, result) => {
            if(error) {
                const moduleError = new ModuleError(500, error.message || "Unexpected error.");
                response.status(500).send(moduleError);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, null, executeOnFinishQuery);
    };

    getTask(taskId, response) {
        const query = "SELECT id, title, description, modified_at FROM task WHERE id = ?";
        const values = [taskId];
        const executeOnFinishQuery = (error, result) => {
            if(error) {
                const moduleError = new ModuleError(500, error.message || "Unexpected error.");
                response.status(500).send(moduleError);
                return;
            }

            response.status(200).json(result[0]);
        };

        database.query(query, values, executeOnFinishQuery);
    };

    updateTask(id, task, response) {
        const query = "UPDATE task SET title = ?, description = ? WHERE id = ?";
        const values = [task.title, task.description, id];
        const executeOnFinishQuery = (error, result) => {
            if(error) {
                const moduleError = new ModuleError(500, error.message || "Unexpected error.");
                response.status(500).send(moduleError);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, values, executeOnFinishQuery);
    };

    deleteTask(taskId, response) {
        const query = "DELETE FROM task WHERE id = ?";
        const values = [taskId];
        const executeOnFinishQuery = (error, result) => {
            if(error) {
                const moduleError = new ModuleError(500, error.message || "Unexpected error.");
                response.status(500).send(moduleError);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, values, executeOnFinishQuery);
    };
}

module.exports = new TodoModule();