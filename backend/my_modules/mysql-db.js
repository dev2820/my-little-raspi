'use strict';

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host:'localhost',
    post: process.env.DB_PORT,
    user:'root',
    password:process.env.DB_PASSWORD,
    database:'MyLittleRaspi'
});

module.exports = connection;
