var mysql = require("mysql2");

var connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "shoppe",
  user: "root",
  password: "123456",
});

connection.getConnection(function (err) {
  if (err) console.log(err);
});

module.exports = connection;
