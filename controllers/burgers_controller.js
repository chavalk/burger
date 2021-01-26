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
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;