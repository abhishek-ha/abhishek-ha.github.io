$(function () {
  $("#box4words").wordsrotator({
     words: ['<img class="sliderb img-fluid" src="images/online-doctor.png" alt="childcare" />', '<img class="sliderb img-fluid" src="images/eldercare.png" alt="Elder Care" />', '<img class="sliderb img-fluid" src="images/gynaecologists.png" alt="Women Care" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" alt="Health Screening" />', '<img class="sliderb img-fluid" src="images/dental.png" alt="Dental Care" />','<img class="sliderb img-fluid" src="images/opthal.png" alt="Eye Checkup" />','<img class="sliderb img-fluid" src="images/sleep.png" alt="Sleep Issues" />','<img class="sliderb img-fluid" src="images/weight-loss.png" alt="Weight Loss" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png" alt="Mindfulness"/>','<img class="sliderb img-fluid" src="images/chestpain.png" alt="Chest Discomfort" />','<img class="sliderb img-fluid" src="images/neckpain.png" alt="Neck Pain"/>','<img class="sliderb img-fluid" src="images/allergy.png" alt="Allergy" />','<img class="sliderb img-fluid" src="images/covid-concern.png" alt="Covid Concerns" />','<img class="sliderb img-fluid" src="images/stomach-pain.png" alt="Stomach Pain" />','<img class="sliderb img-fluid" src="images/shealth.png" alt="Sexual Health" />','<img class="sliderb img-fluid" src="images/hospitalization.png" alt="Hospitalization"/>'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 4000
  });;

  $("#box6words").wordsrotator({
 words: [' Child Care <span class="near">, near you</span>','Elderly Care <span class="near">, near you</span>','Women Care <span  class="near">, near you</span>','Health Screening <span  class="near">, near you</span>',  'Dental Checkup <span  class="near">, near you</span>','Eye Checkup <span  class="near">, near you</span>','Sleep Issues <span  class="near">, near you</span>','Weight Issues <span  class="near">, near you</span>', 'Mindfulness <span  class="near">, near you</span>','Chest Discomfort <span  class="near">, near you</span>','Neck Pain <span  class="near">, near you</span>','Flu/Allergy <span  class="near">, near you</span>','Covid Concerns <span  class="near">, near you</span>','Upset Stomach <span  class="near">, near you</span>', 'Therapy <span  class="near">, near you</span>','Hospitalisation <span  class="near">'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 4000
  });
});



$(function () {
  $("#box1words").wordsrotator({
     words: ['<img class="sliderb img-fluid" src="images/childcare.png" alt="childcare" />', '<img class="sliderb img-fluid" src="images/eldercare.png" alt="Elder Care" />', '<img class="sliderb img-fluid" src="images/gynaecologists.png" alt="Women Care" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" alt="Health Screening" />', '<img class="sliderb img-fluid" src="images/dental.png" alt="Dental Care" />','<img class="sliderb img-fluid" src="images/opthal.png" alt="Eye Checkup" />','<img class="sliderb img-fluid" src="images/sleep.png" alt="Sleep Issues" />','<img class="sliderb img-fluid" src="images/weight-loss.png" alt="Weight Loss" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png" alt="Mindfulness"/>','<img class="sliderb img-fluid" src="images/chestpain.png" alt="Chest Discomfort" />','<img class="sliderb img-fluid" src="images/neckpain.png" alt="Neck Pain"/>','<img class="sliderb img-fluid" src="images/allergy.png" alt="Allergy" />','<img class="sliderb img-fluid" src="images/covid-concern.png" alt="Covid Concerns" />','<img class="sliderb img-fluid" src="images/stomach-pain.png" alt="Stomach Pain" />','<img class="sliderb img-fluid" src="images/shealth.png" alt="Sexual Health" />','<img class="sliderb img-fluid" src="images/hospitalization.png" alt="Hospitalization"/>'],
   animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 4000
  });;

  $("#box2words").wordsrotator({
 words: [' Child Care <span  class="near">, near you</span>','Elderly Care <span class="near">, near you</span>','Women Care <span  class="near">, near you</span>','Health Screening <span  class="near">, near you</span>',  'Dental Checkup <span  class="near">, near you</span>','Eye Checkup <span  class="near">, near you</span>','Sleep Issues <span  class="near">, near you</span>','Weight Issues <span  class="near">, near you</span>', 'Mindfulness <span  class="near">, near you</span>','Chest Discomfort <span  class="near">, near you</span>','Neck Pain <span  class="near">, near you</span>','Flu/Allergy <span  class="near">, near you</span>','Covid Concerns <span  class="near">, near you</span>','Upset Stomach <span  class="near">, near you</span>', 'Therapy <span  class="near">, near you</span>',' Hospitalisation <span  class="near">'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
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

jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#card-slider').owlCarousel({
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
                    items: 1
                  },
                  1170: {
                    items: 1  
                  }
                }
            });
          });






$(document).ready(function(){

if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:50000,
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
arrows: true,
autoplay:true,

autoplayTimeout:3000,
   responsive:
{
0:{items:2},
575:{items:3},
768:{items:4},
991:{items:5},
1199:{items:5}
}

    });


if($('.cor_prev').length)
{
var prev = $('.cor_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.cor_next').length)
{
var next = $('.cor_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}

});











