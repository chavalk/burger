// Import express
var express = require("express");

// Create router for the app
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger");

// Create routes and set up logic within those routes where needed
router.get("/", function(req, res) {
    // Call all method in burger.js to request all burgers
    burger.all(function(data) {
        // Store burgers in object
        var hbsObject = {
            burgers: data
        };
        // Render handlebars page and pass it object with burgers data
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    // Call create method in burger.js and pass it the burger name from the req object
    burger.create(req.body.burger_name, function(result) {
        // Redirect browser to get route to load page with new burger included
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    // Call update method in burger.js and pass it id in parameter
    burger.update(req.params.id, function(result) {
        // If no rows are changed return 404 status else return 200 status
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;