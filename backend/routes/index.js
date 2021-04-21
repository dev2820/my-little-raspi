const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
		/*
  if(req.session.user) {// 세션 존재 확인
    res.render('index');
  }
  else {
    res.redirect('/login');
  }*/
	res.sendFile(path.join(__dirname,'../public','index.html'));
});

module.exports = router;
