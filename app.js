var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var confirmRouter = require('./routes/Confirm');
var registerRouter = require('./routes/Register');
var AloginRouter = require('./routes/Alogin');
var PanelRouter = require('./routes/AdminPanel');
var homeRouter = require('./routes/home');
var internalRouter = require('./routes/internal');
var AP = require('./routes/AdminPanel');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Confirm', confirmRouter);
app.use('/Register', registerRouter);
app.use('/Alogin', AloginRouter);
app.use('/AdminPanel', PanelRouter);
app.use('/home', homeRouter);
app.use('/internal', internalRouter);
app.use('/AdminPanel', AP);


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
