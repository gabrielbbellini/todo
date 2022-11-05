const fetch = require("cross-fetch");

const acquireFetchConfiguration = (method, body) => {
    method = method;
    headers = {
        "Content-type": "application/json",
        "Accept": "application/json"
    };
    body = JSON.stringify(body);
    return { method, headers, body };
};

describe("todo", () => {
    test("createTask", async () => {
        const task = { title: "Jest", description: "Jest description" };
        const response = await fetch("http://localhost:8000/tasks", acquireFetchConfiguration("POST", task));
        expect(response.status).toBe(200);
    });

    test("getTaskById", async () => {
        const response = await fetch("http://localhost:8000/tasks/1");
        expect(response.status).toBe(200);
    });

    test("listAllTasks", async () => {
        const response = await fetch("http://localhost:8000/tasks/");
        expect(response.status).toBe(200);
    });

    test("updateTask", async () => {
        const task = { id: 1, title: "Jest updated", description: "Jest description updated" };
        const response = await fetch("http://localhost:8000/tasks/1", acquireFetchConfiguration("PUT", task));
        expect(response.status).toBe(200);
    });

    test("deleteTaskById", async () => {
        const response = await fetch("http://localhost:8000/tasks/1", acquireFetchConfiguration("DELETE"));
        expect(response.status).toBe(200);
    });

});