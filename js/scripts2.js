$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#purple").click(function() {
    $("body").removeClass();
    $("body").addClass("purple-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
