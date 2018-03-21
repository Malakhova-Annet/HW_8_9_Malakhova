$(function () {
    $('.slider').slick({
        arrows: true,
        dots: false
    });
    $('.slider_wrapper').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $("a#inline").fancybox({
        'hideOnContentClick': true
    });
});