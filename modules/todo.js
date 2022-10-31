const database = require("../configs/database/database");

class TodoModule {
    createTask = (task, response) => {
        const query = "INSERT INTO task (title, description) VALUES (?, ?)";
        const values = [task.title, task.description];
        const executeOnFinishQuery = (error, _) => {
            if(error) {
                response.status(500).send(error);
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
                response.status(500).send(error);
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
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result[0]);
        };

        database.query(query, values, executeOnFinishQuery);
    };

    updateTask(task, response) {
        const query = "UPDATE task SET title = ?, description = ? WHERE id = ?";
        const values = [task.title, task.description, task.id];
        const executeOnFinishQuery = (error, result) => {
            if(error) {
                response.status(500).send(error);
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
                response.status(500).send(error);
                return;
            }

            response.status(200).json(result);
        };

        database.query(query, values, executeOnFinishQuery);
    };
}

module.exports = new TodoModule();