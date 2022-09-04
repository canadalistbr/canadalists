const express = require("express");
const { getAllProvinces } = require("./routes/provinces.controller");
const provincesRoutes = require("./routes/provinces.route");
const citiesRoutes = require("./routes/cities.route");


const app = express();

app.use(express.json())

app.get("/", getAllProvinces)
app.use("/provinces",provincesRoutes)
app.use("/cities",citiesRoutes)

module.exports = app
