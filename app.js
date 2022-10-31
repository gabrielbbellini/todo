const express = require("express");
const path = require("path")

const app = express();
app.use(express.json())

const todoRouter = require("./routes/todo");
app.use(todoRouter);

const PORT = process.env.PORT || 8000; 

const database = require("./configs/database/database");
database.init();

app.listen(PORT, () => console.log("service is running on port " + PORT));