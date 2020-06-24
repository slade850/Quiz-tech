import mysql from 'mysql2';

const connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
        user: "root",
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    database: "quiz-tech"
});

//Connecting to database
connection.connect((err) => {  
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;