$(document).ready(function () {
    $(".btn1").on("click", function () {
        $("#demo").css({
            "background-color": "#905590",
            "font-size": "3rem",
        }); // END CSS
    }); // END BUTTON CLICK
    // CHANGE BACK GOES HERE
    $(".btn2").on("click", function () {
        $("#demo").css({
            "background-color": "rgb(77, 85, 193)",
            "font-size": "2rem",
        });
    });
}); // END READY