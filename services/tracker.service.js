const covidData = require("../data/covid-tracker");
const getStatistics = (req) => {
  return covidData.covidDataStats[req.query.country];
};
const getTracks = (req) => {
  return covidData.covidDataTracks[req.query.country][
    req.query.city ?? "default"
  ];
};

module.exports = { getStatistics, getTracks };
