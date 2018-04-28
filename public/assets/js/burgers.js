
$(function () {
  $(".devoure").on("click", function (event) {
    var id = $(this).data("burgerid");
    var burgerDevoured = {
      devoured: 1
    };
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: burgerDevoured
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".create-burger").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".reorder").on("click", function (event) {
    var burgerName = $(this).data("burger-name");
    console.log(burgerName);
    var burgerReorder = {
      burger_name: burgerName,
      devoured: 0,
      reordered: 0
    };
    $.ajax("/api/burger/", {
      type: "POST",
      data: burgerReorder
    }).then(
      function () {
        location.reload();
      }
    );
  });
});
