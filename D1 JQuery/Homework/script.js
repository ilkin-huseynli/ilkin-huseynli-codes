$(document).ready(function () {

    $("h1").css({
        "background-color": "rgb(52, 152, 219)",
        "color": "white",
        "border": "3px solid rgb(44, 62, 80)"
    });

    $("#hideBtn").click(function () {
        $("h1").hide(1000);
    });

    $("#showBtn").click(function () {
        $("h1").show(1000);
    });

    $("#toggleBtn").click(function () {
        $("h1").toggle(1000);
    });

    $("#styleBtn").click(function () {
        $("h1").css({
            "background-color": "rgb(231, 76, 60)",
            "color": "rgb(255, 255, 255)",
            "font-size": "48px",
            "text-align": "center",
            "border": "5px dashed rgb(241, 196, 15)"
        });
    });

});