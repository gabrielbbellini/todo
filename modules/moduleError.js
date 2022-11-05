module.exports = class ModuleError {
    status;
    message;
    constructor(status = 500, message) {
        this.status = status;
        this.message = message;
    }
}