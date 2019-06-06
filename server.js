//Dependencies

var express = require('express');
// var bodyParser = require('body-parser');
//believe this is needed for an old version of express
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));
console.log("test1")

// Parse application body
app.use(express.urlencoded({ extended: true }));
console.log("test2")
app.use(express.json());
console.log("test3")

//To avoid having DELETE method when posting
app.use(methodOverride('_method'));
console.log("test4")

//Handlebars

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Require routes

var routes = require("./controllers/burgers_controllers.js");
app.use(routes);
console.log("test5")

var port = process.env.PORT || 4500;
app.listen(port, function(){
    console.log("Am I working?")
});
console.log("I am connected, yeah!")


