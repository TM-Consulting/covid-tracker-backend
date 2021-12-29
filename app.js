const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("Server Expresso ☕");
});

app.listen(port, () =>
  console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `)
);
