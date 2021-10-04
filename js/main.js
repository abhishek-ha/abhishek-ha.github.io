$(function () {
  $("#box4words").wordsrotator({
     words: ['<img class="sliderb img-fluid" src="images/family.png" />','<img class="sliderb img-fluid" src="images/dental.png" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" />','<img class="sliderb img-fluid" src="images/opthal.png" />','<img class="sliderb img-fluid" src="images/gynaecologists.png" />','<img class="sliderb img-fluid" src="images/shealth.png"/>'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 4000
  });;

  $("#box6words").wordsrotator({
 words: [' Children & Family', 'Dental', 'Wellness', 'Preventive HealthCare', 'Opthal',  'Gynaecologists', 'Sexual Health'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 4000
  });

});



$(function () {
  $("#box1words").wordsrotator({
   words: ['<img class="sliderb img-fluid" src="images/family.png" />','<img class="sliderb img-fluid" src="images/dental.png" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" />','<img class="sliderb img-fluid" src="images/opthal.png" />','<img class="sliderb img-fluid" src="images/gynaecologists.png" />','<img class="sliderb img-fluid" src="images/shealth.png"/>'],    
   animationIn: "fadeInDown",
    animationOut: "fadeOut",
    speed: 4000
  });;

  $("#box2words").wordsrotator({
    words: [' Children & Family', 'Dental', 'Wellness', 'Preventive HealthCare', 'Opthal',  'Gynaecologists', 'Sexual Health'],
    animationIn: "fadeInDown",
    animationOut: "fadeOut",
    speed: 4000
  });

});


$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 769,
          settings: {
              slidesToShow: 2
          }
      },{
          breakpoint: 426,
          settings: {
              slidesToShow: 1
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});


$(document).ready(function(){
  $('.client-sec-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: true,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 769,
          settings: {
              slidesToShow: 1
          }
      },{
          breakpoint: 426,
          settings: {
              slidesToShow: 1
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
});


// slider

jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: true,
                dots:false,
                autoplayTimeout: 3000,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 3
                  },
                  1170: {
                    items: 5   
                  }
                }
            });
          });


$(document).ready(function()
{

if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:2500,
nav:false,
dots:false,
responsive:
{
0:{items:1},
575:{items:2},
768:{items:2},
991:{items:3},
1199:{items:3}
}
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}

});


$(document).ready(function() {
    $("#news-slider2").owlCarousel({
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:400000,
   responsive:
{
0:{items:1},
575:{items:2},
768:{items:2},
991:{items:3},
1199:{items:3}
}
    });

});


$(document).ready(function() {
    $("#serviceslider1").owlCarousel({
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:4000,
   responsive:
{
0:{items:1},
575:{items:2},
768:{items:2},
991:{items:3},
1199:{items:3}
}
    });

});




$(document).ready(function() {
    $("#corporateslider").owlCarousel({
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:3000,
   responsive:
{
0:{items:2},
575:{items:3},
768:{items:4},
991:{items:3},
1199:{items:3}
}
    });

});

