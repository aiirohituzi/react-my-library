require("dotenv").config();
const maria = require("mysql");

const conn = maria.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  uesr: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "react_my_library",
});

module.exports = conn;
