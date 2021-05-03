const mysqlDB = require('../../my_modules/mysql-db');

module.exports = async function(req, res, next) {
	if(res.locals.userID) {//이미 로그인된 유저
		res.json(400,{ status:'FAILED', message: 'you already logined' });
	}
	else {
		const id = req.body.id || null;
		try {
			if(!id) {
				throw new Error('아이디를 입력해 주십시오.');
			}
			//open mariaDB
			const connection = await mysqlDB.getConnection(async conn => conn);
			const [rows,fields] = await connection.query(`SELECT * FROM users WHERE ID LIKE ?;`,[id+'']);
			connection.release();
			if(rows.length<1) {
				res.status(201).json({ message:'is unique id'});
			}
			else {
                res.status(400).json({ message:'id already exist'});
			}
		}
		catch(err) {
			console.error(`isuniqueid request failed: ${err.message}`);
			res.status(400).json({ message:'isuniqueid request failed...'});
		}
	}
}
