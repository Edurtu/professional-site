(function ($) {
  "use strict";

  // Menu navbar background on scroll
  $(window).scroll( function () {
    if ($(this).scrollTop() > 50) {
      $('nav').addClass('bg-scroll');
    } else {
      $('nav').removeClass('bg-scroll');
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn(200);  // gradually change opacity (hidden to visible)
    } else {
      $('.back-to-top').fadeOut(200); // gradually change opacity (visible to hidden)
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0}, 1000);
    return false;
  });


  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');
  var main_nav_height = $('#header').outerHeight() + 5; // Add 5px for ajust active state

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('menu-active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('menu-active');
      }
    });
  });

  // Porfolio isotope and filter
  // (jQuery + pugin Isotote is necesary)
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-filters li').on( 'click', function() {
    $("#portfolio-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Lightbox Options
  lightbox.option({
    'albumLabel': "Imagen %1 de %2",
    'wrapAround': true
  });

  // Clients carousel (uses the Owl Carousel library)
  $(document).ready(function(){
    $(".clients-carousel").owlCarousel({
      loop: true,
      margin: 70,
      nav: false,
      autoplay: true,
      responsive: {
        0:{
            items:2
        },
        480:{
            items:3
        },
        768: {
            items: 4
        },
        1000:{
            items:5
        }
      }
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    margin: 70,
    dots: true,
    loop: true,
    autoplayTimeout: 10000,
    items: 2,
    responsive: {
      0:{
          items:1
      },
      768:{
          items:2
      }
    }
  });
 
})(jQuery);
