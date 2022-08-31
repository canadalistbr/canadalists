const { getAllProvinces } = require("./provinces.controller");
const express = require("express");

const provincesRoutes = express.Router();

provincesRoutes.get("/", getAllProvinces);
provincesRoutes.get("/provinces", getAllProvinces);

module.exports = provincesRoutes;
