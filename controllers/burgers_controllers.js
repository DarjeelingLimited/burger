// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

//https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object
//looks like I need express.Router() and to do a module.exports to run node in the server.js file
var router = express.Router();

//To user the burger model
var burger = require("../models/burger.js")

//Create routes
//to go to home page
router.get("/", function (req, res) {
    res.redirect("/burgers")
});

//Get burgers

router.get("/burgers", function(req, res) {
    burger.all(function(burger_data) {
        res.render('index', { burger_data });
    });
});

//Create a burger
router.post("/burgers/create", function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect("/");
        console.log(result);
    });
});

//Update a burger
//consider trying method with "burgers/update/:id"?
router.put("burgers/update", function(req, res){
    burger.update(req.body.burger_id, function(result){
        res.redirect("/");
        console.log(result)
    });
});


//Export
module.exports = router;
//module.exports = function(app)
