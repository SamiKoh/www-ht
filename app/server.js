const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.static();

app.get("/", (req, res) => {
  res.send("An alligator approaches!");
});
