const express = require("express");

const {getAllCities}  = require("./cities.controller");

const citiesRoutes = express.Router();

citiesRoutes.get("/cities", getAllCities);

module.exports = citiesRoutes;
