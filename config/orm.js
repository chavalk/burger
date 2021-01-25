// Import MySQL connection
var connection = require("../config/connection");

// Object for all SQL statement functions
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(parameter, cb) {

    },
    updateOne: function(parameter, cb) {
        
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;