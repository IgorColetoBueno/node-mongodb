var util = require('util');
var User = require('./../models/user');

module.exports.login = function (req, res) {
    res.render('login');
};

module.exports.register = function (req, res) {
    res.render('register');
};

module.exports.signin = function (req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function (err, user) {
        if (err) {           
            return;
        }
        if(!util.isNull(user)){
            res.redirect('/cars');
        }
        else{
            res.redirect('/users/login');
        }
        
    });
};
module.exports.create = function (req, res) {
    User.create(req.body, function (err, user) {
        if (err) {
            return;
        }
        res.redirect('/users/login');
    });
};