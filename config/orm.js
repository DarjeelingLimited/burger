// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// Export the ORM object in `module.exports`.

var connection = require("./connection.js");

//create an object with the methods to do with the burger data
//orm.all = all data from database
//orm.create = new data within database
//orm.update = update data within database


//creating a connection query that is selecting everything from the burgers table
//uses a callback in order to pass the result into the next file (models folder)
var orm = {
    all: function (tableInput, cb) {
        connection.query("SELECT * from " + tableInput + ";", function (err,
            result) {
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm;