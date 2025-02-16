$(window).on("scroll", function () {
    if ($(this).scrollTop() > 75) {
        $("body").addClass("fullbody");
    }
    else {
        $("body").removeClass("fullbody");
    }
    if ($(this).scrollTop() > 250) {
        $("header").addClass("scrolledHeader");
    }
    else {
        $("header").removeClass("scrolledHeader");
    }
});