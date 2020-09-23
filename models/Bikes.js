const sql = require('mysql');

const connQuery = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bikes-api',
});

const Bikes = function (bike) {
    this.bike_name = bike.bike_name;
    this.bike_type = bike.bike_type;
    this.bike_owner = bike.bike_owner;
    this.bike_garage = bike.bike_garage;
    this.bike_image = bike.bike_image;
};

Bikes.getAllBikes = (result) => {
    connQuery.query('SELECT * FROM bikes', (err, res) => {
        if (err) {
            console.log('error: ', err);
            result(null, err);
            return;
        }

        console.log('bikes: ', res);
        result(null, res);
    });
};

Bikes.getOneBike = (bikeId, result) => {
    connQuery.query(`SELECT * FROM bikes where id = ${bikeId}`, (err, res) => {
        if (err) {
            console.log('err : ', err.message);
            result(null, err);
            return;
        }

        if (res.length) {
            console.log('Bike : ', res[0]);
            result(null, res[0]);
        }

        // if there is no bike with the id
        result({ bike: 'not_found' }, null);
    });
};

Bikes.create = (newBike, result) => {
    connQuery.query('INSERT INTO bikes SET ?', newBike, (err, res) => {
        if (err) {
            console.log('err : ', err);
            result(null, err);
            return;
        } else {
            console.log('New bike : ', { id: res.insertId, ...newBike });
            result(null, { id: res.insertId, ...newBike });
        }
    });
};

Bikes.updateOne = (bikeId, bike, result) => {
    connQuery.query(
        'UPDATE bikes SET bike_name = ?, bike_type = ?, bike_owner = ?, bike_garage = ?, bike_image = ? WHERE id = ?',
        [
            bike.bike_name,
            bike.bike_type,
            bike.bike_owner,
            bike.bike_garage,
            bike.bike_image,
            bikeId,
        ],
        (err, res) => {
            if (err) {
                console.log('err : ', err.message);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ bike: 'not_found' }, null);
                return;
            }

            console.log('updated bike : ', { id: bikeId, ...bike });
            result(null, { id: bikeId, ...bike });
        }
    );
};

Bikes.deleteOne = (bikeId, result) => {
    connQuery.query('DELETE FROM bikes WHERE id  = ?', bikeId, (err, res) => {
        if (err) {
            console.log('err : ', err.message);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ bike: 'not_found' }, null);
            return;
        }

        console.log('updated bike : ', bikeId);
        result(null, bikeId);
    });
};

module.exports = Bikes;
