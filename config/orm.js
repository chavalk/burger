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
    insertOne: function(name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";

        connection.query(queryString, [name], function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = " + id + ";";
        
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;