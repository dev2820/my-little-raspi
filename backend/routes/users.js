const express = require('express');
const router = express.Router();
const usersController = require('./usersController')
const { verifyToken } = require('../my_middleware/authorization')
/* login request (READ)*/
router.post('/login', usersController.login);

/* signup request (CREATE) */
router.post('/signup', usersController.signup);

/* logout request */
router.get('/logout',verifyToken, usersController.logout);

/* isuniqueid request */
router.post('/is-uniqueid', usersController.isUniqueId);

/* modifyuserinfo request (MODIFY)*/
router.patch('/modify-user-info',verifyToken, usersController.modifyUserInfo);

/* delete request (DELETE)*/
router.delete('/signout',verifyToken, usersController.signout);

/* getuserinfo request (READ)*/
router.get('/get-user-info',verifyToken, usersController.getUserInfo);

/* modifypassword request (READ)*/
router.patch('/modify-password',verifyToken, usersController.modifyPassword);

/* refresh token request (READ)*/
router.get('/refresh-token', usersController.refreshToken);

module.exports = router;
