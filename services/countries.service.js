const countries = require("../data/countries");
const getCountries = () => {
  return countries.countries;
};
const getCities = (id) => {
  return countries.cities[id];
};

module.exports = { getCountries, getCities };
