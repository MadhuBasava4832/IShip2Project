var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// imports added from here

const FirstRoutes = require('./Router/firstrouter');
const LFrouter = require('./Router/LFrouter');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//code added from here

app.use(cors());
app.use(bodyparser.json());
app.use('/', FirstRoutes);
app.use('/LF',LFrouter);
// app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')));




mongoose.connect('mongodb+srv://madhubasava32:O1Duuk8na0cmiYrl@iship2.hvrdl.mongodb.net/')
  .then(result => {
    console.log('mongoDB connected');
  })
  .catch(error => {
    console.log('error occured' + error);
  })

  
var port = 9001;
app.listen(port, function () {
  console.log("server started at port " + port);
})






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
