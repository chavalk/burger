// Import express
var express = require("express");

// Create router for the app
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger");

// Export routes for server.js to use
module.exports = router;