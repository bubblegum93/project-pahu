//Burger Menu 1024
function burger(){
  var menu = $('.site-list');
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('acitve');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      menu.attr( "style", "display: flex" );
      $(this).addClass('active');
    }
  });

  $(window).resize(function() {
    var menu = $('.site-list');
    var w = $(window).width();
    if(w > 1024) {
      menu.removeAttr('style');
      $('.burger').removeClass('open');
      $('.burger').removeClass('active');
    }
  });
};

$(document).ready(function(){
  $('.fancybox-loading').hide();
  
  burger();

  $(".pahu-design-slider").slick({
        arrows: true,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              arrows: false,
            }
          }
        ]
    });
  
  $(".slider-interior").slick({
        arrows: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 854,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
        ]
    });

    $(".slider-interior-prev").on('click', function(e) {
        e.preventDefault();
        $(".slider-interior").slick('slickPrev');
      });

      $(".slider-interior-next").on('click', function(e) {
        e.preventDefault();
        $(".slider-interior").slick('slickNext');
      });

      $(".pahu-design-slider-prev").on('click', function(e) {
        e.preventDefault();
        $(".pahu-design-slider").slick('slickPrev');
      });

      $(".pahu-design-slider-next").on('click', function(e) {
        e.preventDefault();
        $(".pahu-design-slider").slick('slickNext');
      });
});

$(window).load(function(){

});

$(window).resize(function(){

});