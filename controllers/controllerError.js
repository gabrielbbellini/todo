module.exports = class ControllerError {
    status;
    message;
    constructor(status = 422, message) {
        this.status = status;
        this.message = message;
    }
}