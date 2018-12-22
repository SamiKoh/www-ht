var mongoose = require("mongoose");
var GameSchema = new mongoose.Schema({
  winnerMarker: {
    type: String
  },
  singlePlayer: {
    type: Boolean
  },
  winner: {
    type: String,
    index: true
  },
  loser: {
    type: String,
    index: true
  }
});

var Game = mongoose.model("Game", GameSchema);
module.exports = {
  Game: Game
};
