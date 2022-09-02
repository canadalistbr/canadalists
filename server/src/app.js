const express = require("express");
const { getAllProvinces } = require("./routes/provinces.controller");
const provincesRoutes = require("./routes/provinces.route");
const citiesRoutes = require("./routes/cities.route");


const app = express();

app.get("/", getAllProvinces)
app.use(express.json())
app.use(provincesRoutes)

module.exports = app
