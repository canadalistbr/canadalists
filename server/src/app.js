const express = require("express");

const provincesRoutes = require("./routes/provinces.route");
const citiesRoutes = require("./routes/cities.route");


const app = express();

app.use(express.json())

app.use(provincesRoutes)
app.use(citiesRoutes)

module.exports = app
