
$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});

$(document).ready(function () {
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    ////////////////////////////////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    if ($(window).width() <= 767) {
        ////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }
});