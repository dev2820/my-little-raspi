const express = require('express');
const router = express.Router();
const myhash = require('../my_modules/pbkdf2');
const mysqlDB = require('../my_modules/mysql-db');
const { verifyToken } = require('../my_middleware/authorization');
/* POST users delete. */
router.get('/', function(req, res, next) {
	//시스템 정보 반환 info
});

module.exports = router;
