/*Imports from external modules */
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var http = require('http');
var hbs = require('hbs');



/*Imports from local modules*/
var connection = require('./models');
var index = require('./routes/index');
var users = require('./routes/users');
var person = require('./routes/person');

var app = express();

// helpers hbs
hbs.registerHelper('date', function () {
    return new Date();
});

// view engine setup
app.set('view engine', 'hbs');
//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/person', person);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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

http.createServer(app).listen(3000, function(req,res){
    console.log('Server is running');
});

module.exports = app;
