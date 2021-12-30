const express = require("express");
const router = express.Router();
const trackerController = require("../controllers/tracker.controller");
router.get("/statistics", trackerController.getStatistics);
router.get("/tracks", trackerController.getTracks);

module.exports = router;
