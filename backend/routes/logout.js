const express = require('express');
const router = express.Router();
const myhash = require('../my_modules/pbkdf2');
const mysqlDB = require('../my_modules/mysql-db');

/* GET users login. test page */
router.post('/', function(req, res, next) {
    try {
        req.session.destroy(()=>{
            res.status(200).json({ message:'logout success'});
        });
    }
    catch (error) {
        res.status(500).json({ message:'server has some problem...'});
    }
});

module.exports = router;