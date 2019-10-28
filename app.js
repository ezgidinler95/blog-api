var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const cors = require('cors');
const db = require("./helper/db")();
var mongoose = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const corsOptions = {
  exposedHeaders: ['Content-Length', 'Developer-By', 'X-Powered-By', "File-Name"],
};

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// user login
const userController = require("./controllers/usercontroller.js");
app.use('/login', userController.login);

// user
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// generalInformation
const generalInformationRouter = require('./routes/generalInformation');
app.use('/general-information', generalInformationRouter);

// Hobby
const hobbyRouter = require('./routes/hobby');
app.use('/hobby', hobbyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
