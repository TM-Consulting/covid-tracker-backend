var countryService = require("../services/countries.service");

const getCountries = async (req, res) => {
  const countries = await countryService.getCountries();
  return res.send(countries);
};

const getCities = async (req, res) => {
  const cities = await countryService.getCities(req.params.id);
  return res.send(cities);
};
module.exports = { getCountries, getCities };
