var trackerService = require("../services/tracker.service");

const getStatistics = (req, res) => {
  return res.send(trackerService.getStatistics(req));
};
const getTracks = (req, res) => {
  return res.send(trackerService.getTracks(req));
};
module.exports = { getStatistics, getTracks };
