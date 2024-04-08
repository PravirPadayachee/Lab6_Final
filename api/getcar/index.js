//create cars api using express
const express = require('express');
const app = express();
app.use(express.json());

const cars = require('./cars.json');

//get all cars
app.get('/cars', (req, res) => {
    res.json(cars);
});
