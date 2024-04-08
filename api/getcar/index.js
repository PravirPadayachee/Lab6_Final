//create cars api using express
const express = require('express');
const app = express();
app.use(express.json());

const cars = require('/cars.json');
module.exports = async function (context, req) {
    context.res.json(cars);
};
