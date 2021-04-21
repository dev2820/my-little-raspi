const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const myhash = require('../my_modules/pbkdf2');
const mysqlDB = require('../my_modules/mysql-db');
const crypto = require('crypto');

/* GET users signup. test page 
router.get('/', function(req, res, next) {
	res.render('signup');
});*/
/* POST users signup request. */
router.post('/', async (req, res, next) => {
    if(req.session.user) {//로그인 되어있는 유저 퇴출
        res.redirect('/');
    }
	const user_id = req.body.id || null;
    const user_name = req.body.name || null;
    const user_email = req.body.email || null;
    const unhashed_password = req.body.password || null;
    const JWTKEY = process.env.JWTSECRET
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
        const query = `INSERT INTO users(id,name,email,password,salt) VALUES(?,?,?,?,?)`
        const [rows,fields] = await connection.query(query,[user_id+'',user_name+'',user_email+'',user_password+'',user_salt+'']);
        connection.release();//연결 종료
        //jwt token 생성
        const token = jwt.sign({
            userID: rows[0].id,
            loginTime: new Date()
        }, JWTKEY, {
            expiresIn: '1h'
        });
        res.cookie('user',token);
        res.status(201).json({ token,message:'signup success'});
    }
    catch(err) {
        console.error(`signup failed: ${err.message}`);
		res.status(500).json({ message:'server has some problem...'});
    }
    
});
/*
mysql(mariadb) 시작하는 방법
sudo apt update && sudo apt-get -y upgrade // apt 업데이트
sudo mysql // 최초접속은 비밀번호 없이 접속
mysql > set password = password('[비밀번호]');
flush privileges; // 변경된 세팅 적용
mysql -u root -p // 앞으로 접속 방법
*/
module.exports = router;
