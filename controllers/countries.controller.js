var countryService = require("../Services/countries.service");

const getCountries = (req, res) => {
  return res.send(countryService.getCountries());
};
const getCities = (req, res) => {
  return res.send(countryService.getCities(req.params.id));
};
module.exports = { getCountries, getCities };
