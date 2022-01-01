const express = require("express");
const variables = require("./config/variables");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
var countriesRouter = require("./routes/countries.routes");
var trackerRouter = require("./routes/tracker.routes");
const port = 4000;
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕");
});

app.use("/api/country", countriesRouter);
app.use("/api", trackerRouter);

app.listen(variables.PORT, () =>
  console.log(`Expresso ☕ is on Port ${variables.PORT} Ctrl + C to Stop `)
);
