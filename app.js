const express = require("express");
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

app.listen(port, () =>
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);
