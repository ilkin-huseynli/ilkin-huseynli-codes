$(function () {
  console.log($("h2").text());
  $("h2").text("Yeni başlıq");
});

$(function () {
  $("#btn").on("click", function () {
    var value = $("#myInput").val();
    $("#result").text(value);
  });
});

$(function () {
  $("#clearBtn").on("click", function () {
    $("#list").empty();
  });
});