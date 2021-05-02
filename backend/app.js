const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const systemInfoRouter = require('./routes/systemInfo');

const { verifyToken } = require('./my_middleware/authorization')
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if(process.env.NODE_ENV === 'production') {
  app.use(logger('combined'));
  app.use(helmet());
  app.use(hpp());
}
else {
  app.use(logger('dev'));
}
app.use(cors({
  origin: `http://localhost:${process.env.PORT || '3000'}`,
  credentials: true
}));
app.set('jwt-secret',process.env.JWTSECRET);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
  resave: false, // 세션에 수정사항이 생기지 않더라도 세션을 다시 저장하지 않음
  saveUninitialized: false, // 세션에 저장할 내역이 없다면 세션을 저장하지 않음
  secret: process.env.COOKIE_SECRET, //비밀 키
  cookie: { // 세션 쿠키
    httpOnly: true, // 클라이언트에서 쿠키 확인 못함
    secure: false, // https가 아니어도 사용 가능
  }
}
if(process.env.NODE_ENV === 'production') {
  sessionOption.proxy = true;
}
app.use(session(sessionOption));

app.use('/', indexRouter);//메인 페이지 요청
app.use('/users', usersRouter);//회원 정보 관리 요청은 users router로 뺌
app.use('/systemInfo',verifyToken, systemInfoRouter);

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
