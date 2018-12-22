var route = express.Router();

const requireText = require("require-text");
const markdownpdf = require("markdown-pdf");
const fs = require("fs");

route.get("/", function(req, res) {
  let file = requireText("../temp/about.md", require);
  res.json({ content: file });

  /* console.log("loading markdown..");
  fs.readFile("../temp/about.md", file => {
  }); */
});

route.get("/pdf", function(req, res) {
  fs.createReadStream("../temp/about.md")
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream("../temp/about.pdf"));

  var data = fs.readFileSync("../temp/about.pdf");
  res.contentType("application/pdf");
  res.send(data);
});

module.exports = route;
