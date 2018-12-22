mongoose.connect("mongodb://mongo:27017/local");

var Game = require("../models/game").Game;

exports.games_by_marker = function(req, res) {
  let x_count = Game.count({ winnerMarker: "X" });
  let all = Game.count({});
  res.json({ x: x_count, o: all - x_count });
};

exports.save_results = function(game) {
  Game.create(game);
  if (err) {
    return err;
  } else return true;
};
