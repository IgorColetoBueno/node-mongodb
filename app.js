var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodoverride = require('method-override');
var session = require('express-session');

var connections = require('./models/connection');
var hbs = require('hbs');

var index = require('./routes/index');
var users = require('./routes/users');
var cars = require('./routes/cars');

var app = express();


app.set('view engine', 'hbs');

hbs.registerHelper('equals',function(val1,val2,options){
  return val1==val2 ? options.fn(this) : options.inverse(this);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodoverride(function(req,res,next){
  if(req.body && typeof req.body == 'object' && req.body._method){
    var method = req.body._method;
    delete req.body._method; 
    return method;
  }
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/cars',cars);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
