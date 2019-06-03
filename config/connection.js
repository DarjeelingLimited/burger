// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

// * Export the connection.

//houses my sql data

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err)throw err;
    console.log("Connected as id: " + connection.threadid)
});

module.exports = connection;