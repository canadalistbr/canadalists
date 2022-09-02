const express = require("express");

const {getAllCities}  = require("./cities.controller");

const citiesRoutes = express.Router();

citiesRoutes.get("/", getAllCities);

module.exports = citiesRoutes;
