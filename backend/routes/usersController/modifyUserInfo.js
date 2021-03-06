const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users info modify */
module.exports = async function(req, res, next) {
	const user_id = res.locals.userID;
    const user_name = req.body.name || null;
	const user_email = req.body.email || null;
	try {
        //open mariaDB
        const connection = await mysqlDB.getConnection(async conn => conn);
        //password change?
        const datas = [user_name+'',user_email+''];
		datas.push(user_id+'');
        await connection.query(`UPDATE users SET name=?,email=? WHERE id=?`,datas);
        connection.release();
		res.status(201).json({ message:'modify success'});
    }
	catch(err) {
        console.error(`modify failed: ${err.message}`);
		res.status(400).json({ message:'modify failed...'});
    }
}

