import mysql from "mysql2";
import config from "../../../api/config.json";

const connection = mysql.createConnection({
  port: config.DB_PORT,
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASS,
  database: config.DB_BASE,
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
