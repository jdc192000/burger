// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".devoure").on("click", function (event) {
    var id = $(this).data("burgerid");

    console.log("did I get here?")

    var burgerDevoured = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: burgerDevoured
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
