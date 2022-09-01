const express = require("express");
const provincesRoutes = require("./routes/provinces.route");
const app = express();
app.use(express.json())
app.use(provincesRoutes)

module.exports = app
