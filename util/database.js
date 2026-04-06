// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Root@1234'
// });

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Root@1234',{
    dialect:'mysql',
    host:'localhost'
});

// module.exports = pool.promise();
module.exports = sequelize;