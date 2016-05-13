$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('shrink');
    } else {
        $('.navbar').removeClass('shrink');
    }
});

$(document).ready(function() {
    $('.main-nav').onePageNav({
        scrollThreshold: 0.5,
        changeHash: true
    });

    // For mobile, close nav on link select
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });

    // Initiate WOW for scroll effects
    new WOW({
        mobile: false
    }).init();


});
