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

/* modifyuserinfo request (MODIFY)*/
router.post('/modifyuserinfo',verifyToken, usersController.modifyuserinfo);

/* delete request (DELETE)*/
router.post('/signout',verifyToken, usersController.signout);

/* getuserinfo request (READ)*/
router.get('/getuserinfo',verifyToken, usersController.getuserinfo);

/* modifypassword request (READ)*/
router.post('/modifypassword',verifyToken, usersController.modifypassword);


module.exports = router;
