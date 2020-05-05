$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurg").val().trim(),
        devoured: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    $(".devourburger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var devourState = {
        devoured: 1
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devourState
      }).then(
        function() {
          console.log("Burger has been devoured! Yummy!");

          location.reload();
        }
      );
    });


    $(".deleteburger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });