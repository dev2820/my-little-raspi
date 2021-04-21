const express = require('express');
const router = express.Router();
const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users signout
    signout(회원탈퇴)의 경우 비밀번호를 한번 더 받아 확인 후 탈퇴시켜준다.
    토큰 확인 -> 비밀번호 확인 -> 회원 탈퇴
*/
module.exports = async function(req, res, next) {
	const user_id = res.locals.userID;
    const unhashed_password = req.body.password;
	//open mariaDB
    try {
        const connection = await mysqlDB.getConnection(async conn => conn);
        const [rows,fields] = await connection.query(`SELECT * FROM users WHERE id=?;`,[user_id+'']);
        const hashedPassword = await myhash.pbkdf2Hasing(unhashed_password,rows[0].salt)
        if(hashedPassword !== rows[0].password) {
            res.json({ message:'password wrong'});
        }
        await connection.query(`DELETE FROM users WHERE id = ?`,[user_id+'']);
        connection.release();
		req.session.destroy();
		res.status(200).json({ message:'signout success'});
    }  
    catch (err) {
        console.error(err.message);
        res.status(400).json({ message:'signout failed...'});
    }  
}