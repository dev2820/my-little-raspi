const myhash = require('../../my_modules/pbkdf2');
const mysqlDB = require('../../my_modules/mysql-db');

/*  POST users info modify */
module.exports = async function(req, res, next) {
	const user_id = res.locals.userID;
    const user_old_password = req.body.oldPassword;
    const user_new_password = req.body.newPassword;
	try {
        //open mariaDB
        const connection = await mysqlDB.getConnection(async conn => conn);
        const [rows,fields] = await connection.query(`SELECT password,salt FROM users WHERE ID LIKE ?;`,[user_id+'']);
		if(rows.length<1) {
            const user_salt = rows[0].salt;
            const hashedPassword = await myhash.pbkdf2Hasing(user_old_password,user_salt);
            if(hashedPassword === rows[0].password) {
                const hashedNewPassword = await myhash.pbkdf2Hasing(user_new_password,user_salt);
                const datas = [hashedNewPassword+'',user_id+''];
                await connection.query(`UPDATE users SET password=? WHERE id=?`,datas);
                res.status(201).json({ message:'password modify sucess'});
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
        console.error(`modify failed: ${err.message}`);
		res.status(400).json({ message:'password modify failed...'});
    }
}

