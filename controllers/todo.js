const todoModule = require("../modules/todo");
const ControllerError = require("./controllerError");

class TodoController {
    createTask = (task, response) => {
        const isTitleEmpty = !task.title?.trim();
        if(isTitleEmpty) {
            const controllerError = new ControllerError(422, "título da task deve ser informado.")
            response.status(controllerError.status).json(controllerError);
            return;
        }
        
        const isDescriptionEmpty = !task.description?.trim();
        if(isDescriptionEmpty) {
            const controllerError = new ControllerError(422, "descrição da task deve ser informada.")
            response.status(controllerError.status).json(controllerError);
            return;
        }
        todoModule.createTask(task, response);
    };

    getTask(taskId, response) {
        if(isNaN(taskId)) {
            const controllerError = new ControllerError(422, "id da task não é válido.")
            response.status(controllerError.status).json(controllerError);
            return;   
        }
        todoModule.getTask(taskId, response);
    };

    listTasks(response) {
        todoModule.listTasks(response);
    };

    updateTask(id, task, response) {
        if(isNaN(id)) {
            const controllerError = new ControllerError(400, "id da task não é válido.")
            response.status(controllerError.status).json(controllerError);
            return;   
        }

        const isTitleEmpty = !task.title?.trim();
        if(isTitleEmpty) {
            const controllerError = new ControllerError(422, "título da task deve ser informado.")
            response.status(controllerError.status).json(controllerError);
            return;
        }
        
        const isDescriptionEmpty = !task.description?.trim();
        if(isDescriptionEmpty) {
            const controllerError = new ControllerError(422, "descrição da task deve ser informada.")
            response.status(controllerError.status).json(controllerError);
            return;
        }

        todoModule.updateTask(id, task, response);
    };

    deleteTask(taskId, response) {
        const isIdNotANumber = isNaN(taskId);
        const controllerError = new ControllerError(400, "id da task não é válido.")
        if(isIdNotANumber) {
            response.status(controllerError.status).json(controllerError);
            return;   
        }
        todoModule.deleteTask(taskId, response);
    };
}

module.exports = new TodoController();