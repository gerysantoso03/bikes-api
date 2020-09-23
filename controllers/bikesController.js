const Bikes = require('../models/Bikes');

exports.findAll = (req, res) => {
    Bikes.getAllBikes((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.send({
                bikes: data,
            });
        }
    });
};

exports.getOneBike = (req, res) => {
    Bikes.getOneBike(req.params.bikeId, (err, data) => {
        if (err) {
            if (err.bike === 'not_found') {
                res.status(404).send({
                    message: `there is no bike with that ${req.params.bikeId}`,
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving bikes with id ${req.params.bikeId}`,
                });
            }
        } else {
            res.status(200).send({
                bike: data,
            });
        }
    });
};

exports.createBike = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Body content cannot be empty !!',
        });
    }

    // Create bike
    const bike = new Bikes({
        bike_name: req.body.bike_name,
        bike_type: req.body.bike_type,
        bike_owner: req.body.bike_owner,
        bike_garage: req.body.bike_garage,
        bike_image: req.body.bike_image,
    });

    // Save new bike in database
    Bikes.create(bike, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message,
            });
        } else {
            res.status(201).send({
                bike: data,
            });
        }
    });
};

exports.updateBike = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Body content cannot be empty !!',
        });
    }

    Bikes.updateOne(req.params.bikeId, new Bikes(req.body), (err, data) => {
        if (err) {
            if (err.bike === 'not_found') {
                res.status(404).send({
                    message: `There is no bike with that ${req.params.bikeId}`,
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving bikes with id ${req.params.bikeId}`,
                });
            }
        } else {
            res.status(200).send({
                bike: data,
            });
        }
    });
};

exports.deleteBike = (req, res) => {
    Bikes.deleteOne(req.params.bikeId, (err, data) => {
        if (err) {
            if (err.bike === 'not_found') {
                res.status(404).send({
                    message: `There is no bike with that ${req.params.bikeId}`,
                });
            } else {
                res.status(500).send({
                    message: `Error retrieving bikes with id ${req.params.bikeId}`,
                });
            }
        } else {
            res.status(204).send({
                message: 'Bike was successfully delete from database ',
                bike: data,
            });
        }
    });
};
