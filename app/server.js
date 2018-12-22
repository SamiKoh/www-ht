/* Entry point to backend */

/* Global imports to avoid the pain of require */
global.express = require("express");
globa.mongoose = require("mongoose");

const bodyParser = require("body-parser");
const app = express();
const port = 3000;

/* parse json from post requests */
app.use(bodyParser.json()); // application/json
app.use(bodyParser.urlencoded({ extended: true })); // application/x-www-form-urlencoded

/* serve minified frontend */
app.use("/", express.static("frontend/dist"));

/* enable cors */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE");
  next();
});

/* Mongoose */
mongoose.connect("mongodb://mongo:27017/local");

/* Routers */
app.use("/api/gameresults", require("./routes/gameresults"));
app.use("api/users", require("./routes/users"));

/* just some test routes */
app.get("/api", (req, res) => {
  res.send("API is up and runnign!");
});
app.get("/api/other", (req, res) => {
  res.send("Another working endpoint!");
});

app.listen(port, () => console.log("Listening on port 3000"));
