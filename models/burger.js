// Inside `burger.js`, import `orm.js` into `burger.js`
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

//requires the ORM for use with the burgers database

var orm = require("../config/orm.js");
// console.log("loggingBurger.js")

//"burgers" = the tableinput
//function(res) will be sent into the controllers.js file (routes) 
var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },

    update: function(id, cb){
        orm.update("burgers", id, cb);
    },
    //then need to go to apiroutes and put router.put

    create: function(name, cb){
        orm.create("burgers", name, cb);
    }
}

module.exports = burger;


