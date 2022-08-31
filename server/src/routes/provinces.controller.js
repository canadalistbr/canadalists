const { provinces } = require("../models/provinces.model");

function getAllProvinces(req, res) {
  return res.status(200).json(provinces);
}

module.exports = {
  getAllProvinces,
};
