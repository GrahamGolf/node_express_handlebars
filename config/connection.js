require("dotenv").config();
const mysql = require("mysql");
const PORT = 3306;

let connection;
if (process.env.JAWSDB_URL){
   connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
  });
}

  connection.connect(function(err) {
    if (err) throw err;
    console.log("database connected");
  });


  module.exports = connection
