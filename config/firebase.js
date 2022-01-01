var firebase = require("firebase");
require("firebase/database");
let variables = require("./variables");
let config = {
  ...variables.firebaseConfig,
};

firebase.initializeApp(config);
let firebaseDb = firebase.database();
module.exports = { firebaseDb };
