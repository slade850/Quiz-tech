import mysql from 'mysql2';
import apiConfig from '../../apiConfig.json';

const connection = mysql.createConnection({
    port: apiConfig.DB_PORT,
    host: apiConfig.DB_HOST,
    user: apiConfig.DB_USER,
    password: apiConfig.DB_PASS,
    database: apiConfig.DB_BASE
})

//Connecting to database
connection.connect((err) => {  
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

connection.query

export default connection;
