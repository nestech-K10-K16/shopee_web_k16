var mysql = require("mysql2/promise");

var connection = mysql.createPool({
  host: process.env.HOST_NAME,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = connection;
