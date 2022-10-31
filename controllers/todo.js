const todoModule = require("../modules/todo")

class TodoController {
    createTask = (task, response) => {
        const isTitleEmpty = !task.title?.trim();
        if(isTitleEmpty) {
            response.status(422).json({ message: "título da task deve ser informado." });
            return;
        }
        
        const isDescriptionEmpty = !task.description?.trim();
        if(isDescriptionEmpty) {
            response.status(422).json({ message: "descrição da task deve ser informada." });
            return;
        }
        todoModule.createTask(task, response);
    };

    getTask(taskId, response) {
        const isIdNotANumber = isNaN(taskId);
        if(isIdNotANumber) {
            response.status(422).json({ message: "id da task não é válido." });
            return;   
        }
        todoModule.getTask(taskId, response);
    };

    listTasks(response) {
        todoModule.listTasks(response);
    };

    updateTask(task, response) {
        const isIdNotANumber = isNaN(task.id);
        if(isIdNotANumber) {
            response.status(422).json({ message: "id da task não é válido." });
            return;   
        }

        const isTitleEmpty = !task.title?.trim();
        if(isTitleEmpty) {
            response.status(422).json({ message: "título da task deve ser informado." });
            return;
        }
        
        const isDescriptionEmpty = !task.description?.trim();
        if(isDescriptionEmpty) {
            response.status(422).json({ message: "descrição da task deve ser informada." });
            return;
        }

        todoModule.updateTask(task, response);
    };

    deleteTask(taskId, response) {
        const isIdNotANumber = isNaN(taskId);
        if(isIdNotANumber) {
            response.status(422).json({ message: "id da task não é válido." });
            return;   
        }

        todoModule.deleteTask(taskId, response);
    };
}

module.exports = new TodoController();