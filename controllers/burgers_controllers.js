// 3. Inside the `burgers_controller.js` file, import the following:
//    * Express
//    * `burger.js`
// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require('express');
var router = express.Router();

//require burger model
var burger = require("../models/burger.js")
console.log("burgertest");


//Create routes
//to go to home page
//passing burger data into the function
router.get("/", function(req, res) {
    burger.all(function(burger_data) {
        console.log(burger_data);
        res.render("index");
    })
})


// //Export
module.exports = router;
//links the routes (controller file) with server.js

