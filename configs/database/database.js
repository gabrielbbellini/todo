const mysql = require("mysql2");

const connectionConfiguration = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "todo",
}


const database = {
    connection: null,

    init() {
        this.connection = mysql.createConnection(connectionConfiguration);
        this.connection.connect((error) => {
            if (error) throw error;
        });
    },
    
    query(query, args, callback) {
        this.connection.query(query, args, callback);
    },
}

module.exports = database;