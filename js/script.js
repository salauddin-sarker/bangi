;(function ($, window, document, undefined) {
	'use strict';

var w     = window,
		$w    = $(window),
	 $body = $('body');

  //  sticky header
  var $header = $('.header-area'),
  headerHeight = $header.height(),
  scrollTop = 0,
  bodyStickyClass = 'has-sticky',
  headerStickyClass = 'sticky-header';

  $w.on('load scroll resize', function () {
  scrollTop = $w.scrollTop();

  if (scrollTop >= headerHeight && (!$body.hasClass(bodyStickyClass)) && (!$header.hasClass(headerStickyClass))) {
    $body.addClass(bodyStickyClass).css('padding-top', headerHeight);
    $header.addClass(headerStickyClass).css('top', -$header.height()).animate({
      top: 0
    }, 400);
  }

  if (scrollTop < headerHeight && $body.hasClass(bodyStickyClass) && $header.hasClass(headerStickyClass)) {
    $body.removeClass(bodyStickyClass).css('padding-top', 0);
    if ($(window).width() < 768) { 
      $header.css('top', +$header.height()).removeClass(headerStickyClass).animate({
        top: 0
      }, 400);
    } else {
      $header.css('top', 0).removeClass(headerStickyClass).animate({
        top: 0
      }, 400);
    }
  }
  });

  $(document).ready(function(){
      $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();
          var target = this.hash;
          var $target = $(target);
          var scroll;
          if($(window).scrollTop()==0){
              scroll =  ($target.offset().top) - 160
          }else{
              scroll =  ($target.offset().top) - 60
          }
          $('html, body').stop().animate({
              'scrollTop': scroll
          }, 500, 'swing', function () {
              //window.location.hash = target;
          });
      });
  });

  $(window).on('scroll', function () {
    var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight()
      , cur_pos = $(this).scrollTop();
    sections.each(function() {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('li a').removeClass('active');
        sections.removeClass('active');
  
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });




  // scrollTop
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

})(jQuery, window, document);
