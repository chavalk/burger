$(function() {
    $(".create-form").on("submit", function(event) {
         event.preventDefault();

         var newBurger = {
             burger_name: $("#burger").val().trim()
         };
         $.ajax("/api/burgers", {
             type: "POST",
             data: newBurger
         }).then(function() {
             console.log("Created new burger");
             location.reload();
         })
    });

    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(function(data) {
            location.reload();
        });
    });
});