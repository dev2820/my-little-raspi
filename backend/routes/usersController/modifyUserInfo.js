const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users info modify */
module.exports = async function(req, res, next) {
	const user_id = res.locals.userID;
    const user_name = req.body.name;
	const user_email = req.body.email;
	try {
        if(user_old_password) {
            throw new Error('이전 비밀번호를 입력해 주십시오.');
        }
        else if(user_new_password) {
            throw new Error('새로 바꿀 비밀번호를 입력해 주십시오.');
        }
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

