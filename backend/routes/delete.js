const express = require('express');
const router = express.Router();
const myhash = require('../my_modules/pbkdf2');
const mysqlDB = require('../my_modules/mysql-db');

/* POST users delete. */
router.post('/', async function(req, res, next) {
	const user_id = req.body.id;
	//open mariaDB
    try {
        const connection = await mysqlDB.getConnection(async conn => conn);
        const [rows,fields] = await connection.query(`SELECT * FROM users WHERE id=?;`,[user_id+'']);
        hashedPassword = await myhash.pbkdf2Hasing(req.body.password,rows[0].salt)
        if(hashedPassword !== rows[0].password) {
            res.json({ message:'password wrong'});
        }
        await connection.query(`DELETE FROM users WHERE id = ?`,[user_id+'']);
        connection.release();
		req.session.destroy();
		res.status(200).json({ message:'deleted'});
    }  
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message:'server has some problem...'});
    }  
});

module.exports = router;
