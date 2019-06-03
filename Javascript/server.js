//Dependencies

var express = require("express");
// var bodyParser = require("body-parser");
// don't believe I need this with the new version of express
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;

var app = express();

// Config Settings

app.use(express.static('public'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//To avoid having DELETE method when posting
app.use(methodOverride('_method'));

//Handlebars

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require routes

var routes = ("../controllers/burgers_controllers.js");
app.use ("/", routes);

app.listen(PORT, function(){
    console.log("App is listening at localhost:" + PORT);
});


