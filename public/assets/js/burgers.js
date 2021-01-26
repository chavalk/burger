$(function() {

    // Listener for creating a new burger
    $(".create-form").on("submit", function(event) {
        // Prevent default behavior
         event.preventDefault();

        //  Create object to save name entered by user
         var newBurger = {
             burger_name: $("#burger").val().trim()
         };

        // Ajax request to send new burger to route
         $.ajax("/api/burgers", {
             type: "POST",
             data: newBurger
         }).then(function() {
             console.log("Created new burger");
             location.reload();
         })
    });

    // Listener for updating burgers
    $(".change-devour").on("click", function(event) {
        // Grabbing id from burger and storing it in variable
        var id = $(this).data("id");

        // Ajax request to send burger id to route
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function() {
            location.reload();
        });
    });
});