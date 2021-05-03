const express = require('express');
const router = express.Router();
const usersController = require('./usersController')
const { verifyToken } = require('../my_middleware/authorization')
/* login request (READ)*/
router.post('/login', usersController.login);

/* signup request (CREATE) */
router.post('/signup', usersController.signup);

/* isuniqueid request */
router.get('/is-uniqueid', usersController.isuniqueid);

/* modifyuserinfo request (MODIFY)*/
router.patch('/modify-user-info',verifyToken, usersController.modifyuserinfo);

/* delete request (DELETE)*/
router.delete('/signout',verifyToken, usersController.signout);

/* getuserinfo request (READ)*/
router.get('/get-user-info',verifyToken, usersController.getuserinfo);

/* modifypassword request (READ)*/
router.patch('/modify-password',verifyToken, usersController.modifypassword);


module.exports = router;
