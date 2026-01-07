const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sumaiya@1",          // your MySQL password
  database: "cusec_hr",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log("✅ MySQL connected successfully");

module.exports = db;
