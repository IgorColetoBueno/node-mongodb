var Car = require('./../models/car');

module.exports.find = function (req, res) {
    Car.find({}, function (err, cars) {

        if (err) {
            return;
        }

        res.render('cars_list', {
            cars: cars
        });
    })

};

module.exports.new = function (req, res) {
    res.render('cars_new');
};
module.exports.edit = function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if (err) {
            return;
        }
        res.render('cars_edit', {
            car: car
        });
    });

};
module.exports.delete = function (req, res) {
    Car.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            return;
        }
        res.redirect('/cars')
    })
};
module.exports.create = function (req, res) {
    Car.create(req.body, function (err, car) {
        return;
    });
    res.redirect('/cars');
};
module.exports.update = function (req, res) {
    Car.update({
        _id: req.params.id
    }, req.body, function (err, car) {
        if (err) {
            return;
        }
        res.redirect('/cars');
    });
};