$(function () {
  
  $(".changeStatus").on("click", function (event) {
    let id = $(this).data("id");
    let status = $(this).data("status");

      let statusChange = {
        burgerStatus: status
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: statusChange
      }).then(
        function () {
          location.reload();
        }
      );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burgerName: $("#order").val().trim(),
      burgerStatus: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });
});
