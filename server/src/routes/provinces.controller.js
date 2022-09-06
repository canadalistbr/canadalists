const { Provinces } = require("../models/provinces.model");
const { normalizeEntityName } = require("../utils/normalizeEntityName");

async function getAllProvinces(req, res) {
  try {
    const [provinces] = await Provinces.getAllProvinces();
    return res.status(200).json(provinces);
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

async function getProvinceByName(req, res) {
  try {
    const provinceName = normalizeEntityName(req.params.provinceName);
    const [result] = await Provinces.getProvinceByName(provinceName);
    if (result.length === 0)
      return res.status(404).json({ error: "this province does not exist" });
    const [province] = result;
    return res.status(200).json(province);
  } catch (error) {
    console.log(error);
    throw Error("something went wrong");
  }
}

module.exports = {
  getAllProvinces,
  getProvinceByName,
};
