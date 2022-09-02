const {
  getAllProvinces,
  getProvinceByName,
} = require("./provinces.controller");
const express = require("express");

const provincesRoutes = express.Router();

provincesRoutes.get("/", getAllProvinces);
provincesRoutes.get("/:provinceName", getProvinceByName);

module.exports = provincesRoutes;
