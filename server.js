// Set up express
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the public directory in the application
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Start server so it can begin listening to client requests
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});