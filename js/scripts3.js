$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });


  $(".clickable").click(function() {
    $(".dog-showing").slideToggle();
    $(".dog-hidden").slideToggle();

  });
});
