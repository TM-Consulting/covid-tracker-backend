var firebaseConfig = require("../config/firebase");
const db = firebaseConfig.firebaseDb;
var countries = db.ref("countries");

const getCountries = async () => {
  try {
    var countiesList = [];
    countries.on("value", (snapshot) => {
      countiesList = snapshot.val();
    });
    return countiesList;
  } catch (err) {
    return [];
  }
};

const getCities = async (id) => {
  var cities = db.ref("cities/" + id);

  try {
    var citiesList = [];
    cities.on("value", (snapshot) => {
      citiesList = snapshot.val();
    });
    return citiesList;
  } catch (err) {
    return [];
  }
};

module.exports = { getCountries, getCities };
