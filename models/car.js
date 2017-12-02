var mongoose = require('mongoose');

var Car = mongoose.Schema({
    driver_name:{
        type:String,
        required:true
    },
    licence_plate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['IN','OUT'],
        required:true,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Car',Car);