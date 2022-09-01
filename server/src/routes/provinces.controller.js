const { Provinces } = require("../models/provinces.model");

function getAllProvinces(req, res) {
  const allProvinces = Provinces.getAllProvinces();
  return res.status(200).json(allProvinces);
}

function getProvinceById(req, res) {
  const province = Provinces.getProvinceById(req.body.id);
  return res.status(200).json(province);
}

module.exports = {
  getAllProvinces,
  getProvinceById
};
