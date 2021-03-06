const mysqlDB = require('../../my_modules/mysql-db');

module.exports = async function(req, res, next) {
	const user_id = res.locals.userID || null;
	try {
		if(!user_id) {
			throw new Error('아이디를 입력해 주십시오.');
		}
		//open mariaDB
		const connection = await mysqlDB.getConnection(async conn => conn);
		const [rows,fields] = await connection.query(`SELECT * FROM users WHERE ID LIKE ?;`,[user_id+'']);
		connection.release();
		res.status(201).json({ 
            id: rows[0].id,
            name: rows[0].name,
            email: rows[0].email
        });
	}
	catch(err) {
		console.error(`getuserinfo request failed: ${err.message}`);
		res.status(400).json({ message:'getuserinfo request failed...'});
	}
}
