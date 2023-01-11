require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

// let sql = "SELECT * FROM posts";

// pool.execute(sql, (err, result)=> {
//     if(err) throw err;
//     console.log(result);
// })

module.exports = pool.promise();