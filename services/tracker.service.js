const data = require("../utils/data-parse");
const getStatistics = (req) =>
  data.mockedData(req.query.country, req.query.city, false);
const getTracks = (req) => data.mockedData(req.query.country, req.query.city);

module.exports = { getStatistics, getTracks };
