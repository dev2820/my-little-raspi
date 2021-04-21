const express = require('express');
const router = express.Router();
const usersController = require('./usersController')
const { verifyToken } = require('../my_middleware/authorization')
/* login request (READ)*/
router.post('/login', usersController.login);

/* signup request (CREATE) */
router.post('/signup', usersController.signup);

/* modify request (MODIFY)*/
router.post('/modify',verifyToken, usersController.modify);

/* delete request (DELETE)*/
router.post('/signout',verifyToken, usersController.signout);

module.exports = router;
