$(document).ready(function () {

    // Transition effect for navbar and back-to-top icon
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });


    $("#nav-about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
        return false;
    });

    $("#nav-contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
        return false;
    });

    $("#nav-portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1500);
        return false;
    });

    $("#scrollIcon").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
        return false;
    });

    $(".navbar-brand").click(function() {
        $('html, body').animate({ scrollTop: 0 }, "slow");
        return false;
    });
});