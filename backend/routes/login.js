const express = require('express');
const router = express.Router();
const myhash = require('../my_modules/pbkdf2');
const mysqlDB = require('../my_modules/mysql-db');
/* GET users login. test page
router.get('/', function(req, res, next) {
	if(req.session.user) {
		res.redirect('/');
	}
	res.render('login');
});
*/
/* POST users login. */
router.post('/', async function(req, res, next) {
	if(req.session.user) {
		res.json(400,{ status:'FAILED', message: 'you already logined' });
	}
	else {
		const user_id = req.body.id || null;
		const unhashed_password = req.body.password || null;
		try {
			//open mariaDB
			const connection = await mysqlDB.getConnection(async conn => conn);
			const [rows,fields] = await connection.query(`SELECT * FROM users WHERE ID LIKE ?;`,[user_id+'']);
			connection.release();
			if(rows.length<1) {
				res.redirect('/login');
			}
			else {
				const hashedPassword = await myhash.pbkdf2Hasing(unhashed_password,rows[0].salt)
				if(hashedPassword === rows[0].password) {
					//session 설정
					if(!req.session.user) {
						req.session.user = {
							"id": rows[0].id,
							"name": rows[0].name,
							"email": rows[0].email,
							"logined_time": new Date(),
						}
						req.session.save(()=>{
							res.status(200).json({ status:'SUCCESS',message:'login success'});
						})
					}
					else {
						res.status(200).json({ status:'SUCCESS',message:'login success'});
					}
				}
				else {
					res.status(400).json({ status:'FAILED',message:'password incorrect'});
				}
			}
		}
		catch(err) {
			console.error(`login failed: ${err.message}`);
			res.status(500).json({ status:'FAILED',message:'server has some problem...'});
		}
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
