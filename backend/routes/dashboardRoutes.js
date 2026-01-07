const express = require("express");
const router = express.Router();
const { getHrDashboard } = require("../controllers/dashboardController");

router.get("/hr-dashboard", getHrDashboard);

module.exports = router;
