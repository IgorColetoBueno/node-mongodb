var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

router.get('/', function(req, res) {

    Person.find({}, function (err, people) {
        if(err) {
            return;
        }

        res.send(people);
    });

});
router.post('/', function(req, res) {
    Person.create({
        name: {
            firstname: 'Wesley',
            lastname: 'Willians'
        },
        age: 23
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

});
router.put('/:id', function (req, res) {
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });
});

module.exports = router;