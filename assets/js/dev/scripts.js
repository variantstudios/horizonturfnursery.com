$(document).ready(function() {
    /*
  $('nav.main-nav').before('<button class="menu-btn"><img src="/assets/images/menu.svg" />Menu</button>');
  $('nav.main-nav ul').addClass('hide');

  $(".menu-btn").click(function() {
      $("nav.main-nav ul").toggleClass('hide');
      $(".menu-btn").toggleClass('close');
  });
*/
    if (Modernizr.mq('only all')) {
        $('html').addClass('mq');
    } else {
        $('html').addClass('no-mq');
    };
    // $('.my-slider').unslider({
    //     autoplay: true,
    //     infinite: true,
    //     keys: false,
    //     nav: false,
    //     delay: 7000
    // });

    $(".menu-btn").on('click touchstart', function() {
        $('.menu').toggleClass('show');
    });


    $('.home-slider').unslider({
        autoplay: true,
        nav: false
    });

    $(window).load(function(){
        
        if (queryString() == "yes"){
          $('#contact-message').html( "<h3>Thank you. Your message has been sent. We will contact you shortly.</h3>" );
        }
        
    });

    function queryString()
    {
        var queryString = window.location.search;
        var varArray = queryString.split("&");
        for (var i=0;i<varArray.length;i++) {
          var param = varArray[i].split("=");
            //parameter-value pair
            console.log('param', param[1]);
            return param[1];
        }
    } 


});