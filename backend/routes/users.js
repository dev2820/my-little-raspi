const express = require('express');
const router = express.Router();
const usersController = require('./usersController')
const { verifyToken } = require('../my_middleware/authorization')
/* login request (READ)*/
router.post('/login', usersController.login);

/* signup request (CREATE) */
router.post('/signup', usersController.signup);

/* isuniqueid request */
router.post('/isuniqueid', usersController.isuniqueid);

/* modify request (MODIFY)*/
router.post('/modify',verifyToken, usersController.modify);

/* delete request (DELETE)*/
router.post('/signout',verifyToken, usersController.signout);

/* getuserinfo request (READ)*/
router.get('/getuserinfo',verifyToken, usersController.getuserinfo);

/* passwordcheck request (READ)*/
router.get('/getuserinfo',verifyToken, usersController.passwordcheck);


module.exports = router;
