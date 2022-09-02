const { Cities } = require("../models/cities.model");

function getAllCities(req, res) {
  const allCities = Cities.getAllCities();
  res.status(200).json(allCities);
}

function getCityById(req, res) {
  const city = getCityById(req.body.id);
  res.status(200).json(city);
}

module.exports = {
  getAllCities,
  getCityById,
};
