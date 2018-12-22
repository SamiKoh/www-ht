/* const express = require("express"); */
var api = express.Router();

var Game = require("../controllers/game");

api.post("/", function(req, res) {
  res.json(Game.save_results(req.body));
});

api.get("/bymarker", function(req, res) {
  Game.games_by_marker(result => {
    res.json(result);
  });
});
api.get("/total", function(req, res) {
  Game.total_games(result => {
    res.json(result);
  });
});

api.get("/byplayer", function(req, res) {
  Game.games_by_player(result => {
    res.json(result);
  });
});

module.exports = api;
