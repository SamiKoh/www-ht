mongoose.connect("mongodb://mongo:27017/local");

var Game = require("../models/game").Game;

exports.games_by_marker = function(cb) {
  Game.aggregate([
    {
      $group: { _id: "$winnerMarker", total_games: { $sum: 1 } }
    }
  ]).then(function(err, res) {
    if (err) {
      cb(err);
    }
    cb(res);
  });
};

exports.total_games = function(cb) {
  Game.aggregate([{ $group: { _id: null, total: { $sum: 1 } } }]).then(res => {
    cb(res);
  });
};

exports.games_by_player = function(cb) {
  Game.aggregate([{ $group: { _id: "$winner", victories: { $sum: 1 } } }]).then(
    function(res) {
      Game.aggregate([{ $group: { _id: "$loser", losses: { $sum: 1 } } }]).then(
        function(r) {
          cb({ victories: res, losses: r });
        }
      );
    }
  );
};

exports.save_results = function(game) {
  console.log("creating game: ", game);
  Game.create(game, function(err, game) {
    if (err) {
      return err;
    }
    return game;
  });
};
