const { Provinces } = require("../models/provinces.model");

function getAllProvinces(req, res) {
  const allProvinces = Provinces.getAllProvinces()
  return res.status(200).json(allProvinces);
}

module.exports = {
  getAllProvinces,
};
