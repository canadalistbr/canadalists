const { Provinces } = require("../models/provinces.model");

function getAllProvinces(req, res) {
  const allProvinces = Provinces.getAllProvinces();
  return res.status(200).json(allProvinces);
}

function getProvinceByName(req, res) {
  const province = Provinces.getProvinceByName(req.params.provinceName)
  if (!province) {
    res.status(404).json({
      error:"Sorry, this province does not exist"
    })
    return res.redirect("/provinces")
  }
  return res.status(200).json(province);
}

module.exports = {
  getAllProvinces,
  getProvinceByName
};
