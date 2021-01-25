// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        orm.insertOne(name, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;