// Global import
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Global variable
const PORT = process.env.PORT | 3000;

// initialize app
const app = express();

// connec into db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bikes-api',
});

db.connect();

// call route
const bikesRoutes = require('./routes/bikesRoutes');

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Start the route
bikesRoutes(app);

// Server test
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = app;
