$(function() {
    $(".create-form").on("submit", function(event) {
         event.preventDefault();

         var newBurger = {
             burger_name: $("#name").val().trim()
         };

         $.ajax("/", {
             type: "POST",
             data: newBurger
         }).then(function() {
             console.log("Created new burger");
             location.reload();
         })
    });
})