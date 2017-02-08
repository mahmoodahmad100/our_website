$(document).ready(function() {
  $("html").niceScroll({cursorcolor:"#54a460",autohidemode:false,cursorwidth: "10px",cursorminheight:35,zindex:"10000", cursorborder:"none"});
  $("textarea").niceScroll({cursorcolor:"#54a460",autohidemode:false,cursorwidth: "10px",cursorminheight:35,zindex:"10000", cursorborder:"none"});
  $('#portfolio').mixItUp();
  smoothScroll.init({
      offset: 50
  });
  wow = new WOW({
      offset: 100
      })
  wow.init();

  $('#portfolio .menu ul li').click(function () {

      $(this).addClass('active').siblings().removeClass('active');

  });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50)
  {
    $('nav').addClass('change-fixed-nav');
    $('nav.navbar.change-fixed-nav li a').addClass('hvr-shutter-out-horizontal');
    $('.navbar-default .navbar-nav > li > a').removeClass('hvr-underline-from-center');
  }
  else
  {
    $('nav').removeClass('change-fixed-nav');
    $('.navbar-default .navbar-nav > li > a').removeClass('hvr-shutter-out-horizontal');
    $('.navbar-default .navbar-nav > li > a').addClass('hvr-underline-from-center');
  }
});
