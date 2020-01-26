const Sequalize = require('sequelize')

const sequalize = new Sequalize('node-complete', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequalize
/*
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-complete'
})

module.exports = pool.promise()
*/
