const express = require('express');
const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users modify */
module.exports = async function(req, res, next) {
    if(res.locals.userID) {//이미 로그인된 유저
		res.json(400,{ status:'FAILED', message: 'you already logined' });
	}
	const user_id = res.locals.userID;
    const user_name = req.body.name;
	const user_email = req.body.email;
    const user_password = req.body.password;
	try {
        //open mariaDB
        const connection = await mysqlDB.getConnection(async conn => conn);
        //password change?
        const datas = [user_name+'',user_email+''];
        if(user_password !== "") {
            const [rows,fields] = await connection.query(`SELECT salt,password FROM users WHERE id LIKE ?`,[user_id+'']);
            hashedPassword = await myhash.pbkdf2Hasing(user_password,rows[0].salt)
            datas.push(hashedPassword);
        }
		datas.push(user_id+'');
        const [rows,fields] = await connection.query(`UPDATE users SET name=?,email=?${user_password?',password=?':''} WHERE id=?`,datas);
        connection.release();
		res.status(201).json({ message:'modify success'});
    }
	catch(err) {
        console.error(`modify failed: ${err.message}`);
		res.status(400).json({ message:'modify failed...'});
    }
}

