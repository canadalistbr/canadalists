const { Cities } = require("../models/cities.model");

function getAllCities(req, res) {
  const allCities = Cities.getAllCities();
  res.status(200).json(allCities);
}

function getCityByName(req, res) {
  const cityName = req.params.cityName;
  const city = Cities.getCityByName(cityName);
  if (!city) {
    res.status(404).json({
      error: "Sorry, this city does not exist",
    });
  }
  return res.status(200).json(city);
}

module.exports = {
  getAllCities,
  getCityByName,
};
