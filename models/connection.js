var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/parking',
    {
        useMongoClient: true
    }, function (err) {
        if (err) {
            console.log('A error ocurred on database!');
            return;
        }
        console.log('MongoDB is connected');
    }).connection;