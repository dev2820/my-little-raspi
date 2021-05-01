const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');

module.exports = async function(req, res, next) {
	const user_id = res.locals.userID || null;
    const user_password = req.body.password || null;
	try {
		//open mariaDB
		const connection = await mysqlDB.getConnection(async conn => conn);
		const [rows,fields] = await connection.query(`SELECT password,salt FROM users WHERE ID LIKE ?;`,[user_id+'']);
		connection.release();
		if(rows.length<1) {
            hashedPassword = await myhash.pbkdf2Hasing(user_password,rows[0].salt)
            if(hashedPassword === rows[0].password) {
                res.status(201).json({ message:'passwordcheck sucess'});
            }
            else {
                throw new Error('password is incorrect');
            }
		}
		else {
            throw new Error('user is not exist');
		}
	}
	catch(err) {
		console.error(`passwordcheck request failed: ${err.message}`);
		res.status(400).json({ message:err.message});
	}
}
