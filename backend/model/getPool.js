const mysql = require("mysql2");
const pool = mysql.createConnection({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

pool.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL connected...");
  }
});

const s_users = "select * from user_table ";
const insertUser_query =
  "insert into user_table (Name,email,date_of_birth,password) values(?,?,?,?)";
module.exports = { pool, s_users, insertUser_query };
