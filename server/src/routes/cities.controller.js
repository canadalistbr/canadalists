const { Cities } = require("../models/cities.model");

function getAllCities(req, res) {
  const allCities = Cities.getAllCities();
  res.status(200).json(allCities);
}

function getCityByName(req, res) {
  const cityName = req.params.cityName
  const city = Cities.getCityByName(cityName)
  if (!city) {
    return res.redirect("/cities")
  }
  return res.status(200).json(city)
}

module.exports = {
  getAllCities,
  getCityByName,
};
