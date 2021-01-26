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
    updateOne: function(table, devourUpdate, condition, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE " + condition;

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