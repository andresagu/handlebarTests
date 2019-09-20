// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s9xpbd61ok2i7drv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "troks6d6rwn9uzyu",
  password: "mo5s5ph77g0m1s74",
  database: "kghecv4dn5b7cm6g"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
