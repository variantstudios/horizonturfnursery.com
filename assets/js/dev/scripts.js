$(document).ready(function() {

    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };

    $(".menu-btn").on('click touchstart', function() {
        $('.menu').toggleClass('show');
    });

    if ($('body.front').length > 0) {
        $('.home-slider').unslider({
            autoplay: true,
            nav: false
        });
    });

    if ($('body.contact').length > 0) {

        //$(window).load(function(){

        if (queryString() == "yes") {
            $('#contact-message').html("<span><h3>Thank you. Your message has been sent. We will contact you shortly.</h3></span>");
        }

        //});
    });

    function queryString() {
        var queryString = window.location.search;
        var varArray = queryString.split("&");
        for (var i = 0; i < varArray.length; i++) {
            var param = varArray[i].split("=");
            //parameter-value pair
            console.log('param', param[1]);
            return param[1];
        }
    };


});