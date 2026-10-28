$(document).ready(function () {

  $("#btn-toggle").click(function () {
    $(".box-toggle").toggle(500);
  });

  $("#btn-fade").click(function () {
    $(".box-fade").fadeToggle();
  });

  let isFaded = false;

  $("#btn-fadeto").click(function () {
    if (isFaded == false) {
      $(".box-fadeto").fadeTo(500, 0.25);
      isFaded = true;
    } else {
      $(".box-fadeto").fadeTo(500, 1);
      isFaded = false;
    }
  });

  let isUp = false;

  $("#btn-slide").click(function () {
    if (isUp == false) {
      $(".box-slide").slideUp();
      $(this).text("Slide Down");
      isUp = true;
    } else {
      $(".box-slide").slideDown();
      $(this).text("Slide Up");
      isUp = false;
    }
  });

});