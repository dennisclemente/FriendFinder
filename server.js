//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();
var PORT = process.env.PORT || 8080;

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Port
app.listen(PORT, function(err) {
  if (err) throw err;
  console.log("App listening on PORT: " + PORT);
});
