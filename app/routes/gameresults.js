/* const express = require("express"); */
var api = express.Router();

var Game = require("../controllers/game");

api.post("/gameresults", function(req, res) {
  if (Game.save_results(req.body)) {
    res.send(201);
  } else res.send(400);
});

api.get("/gameresults/bymarker", function(req, res) {
  Game.games_by_marker(req, res);
});
