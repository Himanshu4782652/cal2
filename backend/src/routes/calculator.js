const express = require("express");
const { calculateWaterUsage } = require("../controllers/calculator");

const router = express.Router();

router.post("/calculate", calculateWaterUsage);

module.exports = router;
