const express = require("express");

const {getAllCities, getCityByName}  = require("./cities.controller");

const citiesRoutes = express.Router();

citiesRoutes.get("/", getAllCities);
citiesRoutes.get("/:cityName", getCityByName);

module.exports = citiesRoutes;
