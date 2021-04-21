const express = require('express');
const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users modify
    미완성된 라우터
*/
module.exports = async function(req, res, next) {
	const user_id = req.body.id;
    const user_name = req.body.name;
	const user_email = req.body.email;
    const user_password = req.body.password;
	try {
        //open mariaDB
        const connection = await mysqlDB.getConnection(async conn => conn);
        //password change?
        const datas = [user_name+'',user_email+''];
        if(req.body.password !== "") {
            const [rows,fields] = await connection.query(`SELECT salt,password FROM users WHERE id LIKE ?`,[user_id+'']);
            hashedPassword = await myhash.pbkdf2Hasing(req.body.password,rows[0].salt)
            datas.push(hashedPassword);
        }
		datas.push(user_id+'');
        const [rows,fields] = await connection.query(`UPDATE users SET name=?,email=?,${req.body.password?'password=?':''} WHERE id=?`,datas);
        connection.release();
		res.status(200).json({ message:'modify success'});
    }
	catch(err) {
        console.error(`modify failed: ${err.message}`);
		res.status(500).json({ message:'server has some problem...'});
    }
}

