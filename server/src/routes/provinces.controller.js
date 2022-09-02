const { Provinces } = require("../models/provinces.model");

function getAllProvinces(req, res) {
  const allProvinces = Provinces.getAllProvinces();
  return res.status(200).json(allProvinces);
}

function getProvinceByName(req, res) {
  const province = Provinces.getProvinceByName(req.body.name);
  return res.status(200).json(province);
}

module.exports = {
  getAllProvinces,
  getProvinceByName
};
