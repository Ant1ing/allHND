$(document).ready(function (){

    // code goes here
    $(".html_logo").on("click", function () {
        $(".top_links").toggle();
    });

    $(".left_div").on("click", function () {
        $(".center_div").hide();
    });

    $(".right_div").on("click", function() {
        $("center_div").show();
    });

    // fade in and out the js logo
    $("ul li.jq_logo").on("click", function (){
        $(this).fadeOut(1000, function () {
            $("li.static").css({display: "block"});
        });
    });

    $("ul li.js_logo").on("click", function (){
        $("ul li.jq_logo").fadeIn(3000);
        $("li.static").css({display: "none" });
    });

    $(".logo").on("click", function (){
        $(this).fadeTo("slow", 0.2);
    });

    $("span").on("click", function (){
        $(".logo").faeTo("fast", 1);
    });

    $(".center_div").click(function () {
        $("#text-section > ul > li").fadeToggle (1500);
    });

    $("footer").on("click", function () {
        $("header").slideUp(1000);
    });

    $(".return-header").on("click", function () {
        $("header").slideDown("slow");
    });

    $("ul li.css_logo").on("click", function () {
        $(".logo").slideToggle(1500);
    });

    $(".change").on("click", function () {
        $(".change").toggleClass("active")
    });

    $(".themeOn").on("click", function () {
        $("#mast").css({
            "background-color": "#54a8e8",
            "font-size": "1.5rem",
        });
    });

    $(".themeOff").on("click", function () {
        $("#mast").css({
            "background-color": "#525d61",
            "font-size": "1rem",
        });
    });

}); // end ready