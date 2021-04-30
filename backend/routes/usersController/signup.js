const express = require('express');
const jwt = require('jsonwebtoken');
const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');
const crypto = require('crypto');
const JWTKEY = process.env.JWTSECRET

/*  POST users signup request. 
    회원정보 입력 -> 이상 없으면 db connection, -> INSERT -> 
    token 발행
*/
module.exports = async (req, res, next) => {
    if(res.locals.userID) {
		res.json(400,{ status:'FAILED', message: 'you already logined' });
	}
    
    const user_id = req.body.id || null;
    const user_name = req.body.name || null;
    const user_email = req.body.email || null;
    const unhashed_password = req.body.password || null;
    
	if(!user_id == null) {
        res.json({ status:'FAILED',message:'need id'});
    }
    else if(!user_name == null) {
        res.json({ status:'FAILED',message:'need name'});
    }
    else if(unhashed_password == null) {
        res.json({ status:'FAILED',message:'need password'});
    }
    try {
        const user_salt = await crypto.randomBytes(64).toString('base64');
        const user_password = await myhash.pbkdf2Hasing(unhashed_password,user_salt);
        //open mariaDB
        const connection = await mysqlDB.getConnection(async conn => conn);
        const query = `INSERT INTO users(id,name,email,password,salt) VALUES(?,?,?,?,?)`;
        const [rows,fields] = await connection.query(query,[user_id+'',user_name+'',user_email+'',user_password+'',user_salt+'']);
        connection.release();//연결 종료

        //jwt token 생성
        const token = jwt.sign({
            userID: user_id,
            loginTime: new Date()
        }, JWTKEY, {
            expiresIn: '1h'
        });
        res.cookie('user',token);
        res.status(201).json({ token,message:'signup success'});
    }
    catch(err) {
        console.error(`signup failed: ${err.message}`);
		res.status(400).json({ message:'signup failed...'});
    }
    
}