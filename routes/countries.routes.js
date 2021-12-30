const express = require("express");
const router = express.Router();
const countriesController = require("../controllers/countries.controller");
router.get("/all", countriesController.getCountries);
router.get("/:id/cities", countriesController.getCities);

module.exports = router;
