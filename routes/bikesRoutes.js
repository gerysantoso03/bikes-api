module.exports = (app) => {
    const bikesController = require('../controllers/bikesController');

    // Get all bikes
    app.get('/bikes', bikesController.findAll);

    // Create new bike
    app.post('/bikes', bikesController.createBike);

    // Get one bike
    app.get('/bikes/:bikeId', bikesController.getOneBike);

    // Update bike
    app.patch('/bikes/:bikeId', bikesController.updateBike);

    // Delete bike
    app.delete('/bikes/:bikeId', bikesController.deleteBike);
};
