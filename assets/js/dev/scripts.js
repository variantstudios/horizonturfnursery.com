$(document).ready(function() {
 /*
  $('nav.main-nav').before('<button class="menu-btn"><img src="/assets/images/menu.svg" />Menu</button>');
  $('nav.main-nav ul').addClass('hide');

  $(".menu-btn").click(function() {
      $("nav.main-nav ul").toggleClass('hide');
      $(".menu-btn").toggleClass('close');
  });
*/
	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};
  $('.my-slider').unslider({
      autoplay: true,
      infinite: true,
      keys: false,
      nav: false,
      delay: 7000
  });

  $( ".menu-btn" ).on('click touchstart', function() {
        $('.menu').toggleClass('show');
    });

});