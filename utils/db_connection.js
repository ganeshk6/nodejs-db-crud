const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_project', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    }catch(err){
        console.error("Database connection failed:", err);
    }
})();

module.exports = sequelize


// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "node_project"
// })

// connection.connect((err)=>{
//     if(err){
//         console.error("Database connection failed:", err);
//         return;
//     }
//     console.log("Connection has been created");

//     connection.query(`
//         CREATE TABLE IF NOT EXISTS users(
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             email VARCHAR(255) NOT NULL,
//             age INT NULL
//         )
//     `, (err)=>{
//         if(err){
//             console.error("Error creating users table:", err);
//             return;
//         }
//         console.log("Users table created successfully");
//     })
// })

// module.exports = connection;