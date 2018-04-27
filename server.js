var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);

app.listen(PORT, function () {
  console.log("App listening on PORT" + PORT);
});