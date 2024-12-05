const express = require("express");
const cors = require("cors");
const calculatorRoutes = require("./routes/calculator");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", calculatorRoutes);

module.exports = app;
