const FirebaseService = require("./firebase.service");
const getCountries = async () => {
  const countries = await FirebaseService.getCountries();
  return countries;
};
const getCities = async (id) => {
  const cities = await FirebaseService.getCities(id);
  return cities;
};

module.exports = { getCountries, getCities };
