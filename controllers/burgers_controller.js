// Import express
var express = require("express");

// Create router for the app
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger");

// Create routes and set up logic within those routes where needed
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Export routes for server.js to use
module.exports = router;