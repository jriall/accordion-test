$("document").ready(function() {
  //content to load
  var newContent =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis voluptatibus, totam voluptate architecto cum repudiandae minima. Voluptatibus, fuga adipisci quas minus laudantium nulla modi magni quos sunt odio, natus ad!";

  //handles opening and closing of the li items
  $(".toggle").click(function(e) {
    e.preventDefault();
    if (
      $(this)
      .next()
      .hasClass("show")
    ) {
      $(this)
        .next()
        .removeClass("show");
      $(this)
        .next()
        .slideUp(350);
    } else {
      $(this)
        .parent()
        .parent()
        .find("li .content")
        .removeClass("show");
      $(this)
        .parent()
        .parent()
        .find("li .content")
        .slideUp(350);
      $(this)
        .parent()
        .parent()
        .find("li .show");
      $(this)
        .next()
        .toggleClass("show");
      $(this)
        .next()
        .slideToggle(350);

      //handles replacing content
      if (!$(this).hasClass("loaded") && !$(this).hasClass("form-toggle")) {
        $(this)
          .addClass("loaded")
          .next()
          .fadeOut("slow", function() {
            $(this)
              .html(`<p>${newContent}</p>`)
              .fadeIn("slow");
          });
      }
    }

    //handles changing the carets
    if ($("p").hasClass("show")) {
      $(this)
        .children("i")
        .remove();
      $(this)
        .append(`<i class="fa fa-caret-up" aria-hidden="true">`);
    } else if (!$("p").hasClass("show")) {
      $(this)
        .children("i")
        .remove();
      $(this)
        .append(`<i class="fa fa-caret-down" aria-hidden="true">`);
    }
  });

  //form validation
  $("#contact-form").validate({
    rules: {
      tel: {
        required: true,
        digits: true
      }
    }
  });
});