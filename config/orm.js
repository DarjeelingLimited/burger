// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// Export the ORM object in `module.exports`.

var connection = require("./connection.js");
// console.log("ORM.js connection")

//create an object with the methods to do with the burger data
//orm.all = all data from database
//orm.create = new data within database
//orm.update = update data within database


//creating a connection query that is selecting everything from the burgers table
//uses a callback in order to pass the result into the next file (models folder)
var orm = {
    all: function (tableInput, cb) {
        connection.query('SELECT * from '+tableInput+';', function (err,
            result) {
            if (err) throw err;
            cb(result);
            // console.log("LoggingORM")
        })
    },
    // add in update method
    // update "tableInput" (which in this case = burgers)
    update: function(tableInput, condition, cb) {
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result) {
            if (err) throw err;
            cb(result);
            // console.log("logging update")
        })
    },

    //insert values into the tableInput
    // value will be provided from routes file
    //burger.js also needs create function
    //inserting a string as the value (val)
    create: function(tableInput, val, cb){
        connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');" , function(err, result){
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;