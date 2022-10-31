const express = require("express");

const app = express();
app.use(express.json());

const cors = require("cors");
const corsOptions = { origin: ["http://localhost:8080"] };
app.use(cors(corsOptions));

const todoRouter = require("./routes/todo");
app.use(todoRouter);

const PORT = process.env.PORT || 8000; 

const database = require("./configs/database/database");
database.init();

app.listen(PORT, () => console.log("service is running on port " + PORT));