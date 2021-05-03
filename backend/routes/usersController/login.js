const jwt = require('jsonwebtoken');
const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');
/*
mysql(mariadb) 시작하는 방법
sudo apt update && sudo apt-get -y upgrade // apt 업데이트
sudo mysql // 최초접속은 비밀번호 없이 접속
mysql > set password = password('[비밀번호]');
flush privileges; // 변경된 세팅 적용
mysql -u root -p // 앞으로 접속 방법
*/
/*	POST login request
	이미 로그인된 유저인지 확인 -> 로그인 되어있으면 거절
	로그인 안된 유저 -> db connection -> READ -> 매치
	성공시 토큰 발행
*/
module.exports = async function(req, res, next) {
	if(res.locals.userID) {//이미 로그인된 유저
		res.json(400,{ status:'FAILED', message: 'you already logined' });
	}
	else {
		const user_id = req.body.id || null;
		const user_plainPassword = req.body.password || null;
		const JWTKEY = process.env.JWTSECRET
		try {
			if(user_id) {
				throw new Error('아이디를 입력해 주십시오.');
			}
			else if(user_plainPassword) {
				throw new Error('비밀번호를 입력해 주십시오.');
			}
			//open mariaDB
			const connection = await mysqlDB.getConnection(async conn => conn);
			const [rows,fields] = await connection.query(`SELECT * FROM users WHERE ID LIKE ?;`,[user_id+'']);
			connection.release();
			if(rows.length<1) {
				res.status(401).json({ message:'no matched user'});
			}
			else {
				if(await myhash.compare(user_plainPassword,rows[0].password,rows[0].salt)) {
					//jwt token 생성
					const token = jwt.sign({
						userID: rows[0].id,
						loginTime: new Date()
					}, JWTKEY, {
						expiresIn: '1h'
					});
					res.cookie('user',token);
					res.status(201).json({ token, message:'login success'});
				}
				else {
					res.status(401).json({ message:'password incorrect'});
				}
			}
		}
		catch(err) {
			if(connection) connection.release();
			console.error(`login failed: ${err.message}`);
			res.status(400).json({ message:'login failed...'});
		}
	}
}
