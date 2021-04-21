const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const logoutRouter = require('./routes/logout');
const modifyRouter = require('./routes/modify');
const deleteRouter = require('./routes/delete');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.set('jwt-secret',process.env.JWTSECRET);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false, // 세션에 수정사항이 생기지 않더라도 세션을 다시 저장하지 않음
  saveUninitialized: false, // 세션에 저장할 내역이 없다면 세션을 저장하지 않음
  secret: 'secret code', //비밀 키
  cookie: { // 세션 쿠키
    httpOnly: true, // 클라이언트에서 쿠키 확인 못함
    secure: false, // https가 아니어도 사용 가능
  }
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/signup', signupRouter);
app.use('/modify', modifyRouter);
app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
