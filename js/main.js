$(function () {
  $("#box4words").wordsrotator({
     words: ['<img class="sliderb img-fluid" src="images/childcare.png" />', '<img class="sliderb img-fluid" src="images/eldercare.png" />', '<img class="sliderb img-fluid" src="images/gynaecologists.png" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" />', '<img class="sliderb img-fluid" src="images/dental.png" />','<img class="sliderb img-fluid" src="images/opthal.png" />','<img class="sliderb img-fluid" src="images/sleep.png" />','<img class="sliderb img-fluid" src="images/weight-loss.png" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png"/>','<img class="sliderb img-fluid" src="images/chestpain.png"/>','<img class="sliderb img-fluid" src="images/neckpain.png"/>','<img class="sliderb img-fluid" src="images/allergy.png" />','<img class="sliderb img-fluid" src="images/covid-concern.png" />','<img class="sliderb img-fluid" src="images/stomach-pain.png" />','<img class="sliderb img-fluid" src="images/shealth.png" />','<img class="sliderb img-fluid" src="images/hospitalization.png"/>'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 2000
  });;

  $("#box6words").wordsrotator({
 words: [' Child Care <span  class="near">, near you</span>','Elderly Care <span class="near">, near you</span>','Women Care <span  class="near">, near you</span>','Health Screening <span  class="near">, near you</span>',  'Dental Checkup <span  class="near">, near you</span>','Eye Checkup <span  class="near">, near you</span>','Sleep Issues <span  class="near">, near you</span>','Weight Issues <span  class="near">, near you</span>', 'Mindfulness <span  class="near">, near you</span>','Chest Discomfort <span  class="near">, near you</span>','Neck Pain <span  class="near">, near you</span>','Flu/Allergy <span  class="near">, near you</span>','Covid Concerns <span  class="near">, near you</span>','Upset Stomach <span  class="near">, near you</span>', 'Therapy <span  class="near">, near you</span>','Hospitalisation <span  class="near">'],
    animationIn: "slideIn 0.4s",
    animationOut: "slideOut 0.4s",
    speed: 2000
  });
});



$(function () {
  $("#box1words").wordsrotator({
     words: ['<img class="sliderb img-fluid" src="images/childcare.png" />', '<img class="sliderb img-fluid" src="images/eldercare.png" />', '<img class="sliderb img-fluid" src="images/gynaecologists.png" />', '<img class="sliderb img-fluid" src="images/preventive-health.png" />', '<img class="sliderb img-fluid" src="images/dental.png" />','<img class="sliderb img-fluid" src="images/opthal.png" />','<img class="sliderb img-fluid" src="images/sleep.png" />','<img class="sliderb img-fluid" src="images/weight-loss.png" />', '<img class="sliderb img-fluid" src="images/wellness-slider.png"/>','<img class="sliderb img-fluid" src="images/chestpain.png"/>','<img class="sliderb img-fluid" src="images/neckpain.png"/>','<img class="sliderb img-fluid" src="images/allergy.png" />','<img class="sliderb img-fluid" src="images/covid-concern.png" />','<img class="sliderb img-fluid" src="images/stomach-pain.png" />','<img class="sliderb img-fluid" src="images/shealth.png" />','<img class="sliderb img-fluid" src="images/hospitalization.png"/>'],
    animationOut: "fadeOut",
    speed: 4000
  });;

  $("#box2words").wordsrotator({
 words: [' Child Care <span  class="near">, near you</span>','Elderly Care <span class="near">, near you</span>','Women Care <span  class="near">, near you</span>','Health Screening <span  class="near">, near you</span>',  'Dental Checkup <span  class="near">, near you</span>','Eye Checkup <span  class="near">, near you</span>','Sleep Issues <span  class="near">, near you</span>','Weight Issues <span  class="near">, near you</span>', 'Mindfulness <span  class="near">, near you</span>','Chest Discomfort <span  class="near">, near you</span>','Neck Pain <span  class="near">, near you</span>','Flu/Allergy <span  class="near">, near you</span>','Covid Concerns <span  class="near">, near you</span>','Upset Stomach <span  class="near">, near you</span>', 'Therapy <span  class="near">, near you</span>','Hospitalisation <span  class="near">'],
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
                    items: 3
                  },
                  1170: {
                    items: 5   
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




(()=> {
    const linearCarousel = (el) => {
        const carouselElement =  el;
        let carouselItems = el.querySelectorAll('.carousel__item');
        let activeIndex = 0;

        const reAlignCarousel = () => {
            if(carouselItems.length == 0) {
                return;
            }
            Array.prototype.forEach.call(carouselItems, item => {
                item.classList.remove('carousel__item-prev', 'carousel__item-prev-prev', 'carousel__item-next', 'carousel__item-next-next', 'carousel__item--active')
            });

            if (activeIndex === 0) {
                carouselItems[carouselItems.length-1].classList.add('carousel__item-prev');
                carouselItems[carouselItems.length-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            } else if (activeIndex === 1) {
                carouselItems[0].classList.add('carousel__item-prev');
                carouselItems[carouselItems.length-1].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            } else if (activeIndex === carouselItems.length-2) {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[0].classList.add('carousel__item-next-next');
            } else if (activeIndex === carouselItems.length-1) {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[0].classList.add('carousel__item-next');
                carouselItems[1].classList.add('carousel__item-next-next');
            } else {
                carouselItems[activeIndex-1].classList.add('carousel__item-prev');
                carouselItems[activeIndex-2].classList.add('carousel__item-prev-prev');
                carouselItems[activeIndex+1].classList.add('carousel__item-next');
                carouselItems[activeIndex+2].classList.add('carousel__item-next-next');
            }
            carouselItems[activeIndex].classList.add('carousel__item--active');
        }


        const cloneElementAndAppendToCarousel = (element) => {
            var clone = element.cloneNode(true);
            console.log(clone);
            carouselElement.appendChild(clone);
        }

        const moveToNextItem = () => {
            if(activeIndex == (carouselItems.length - 1)) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
            reAlignCarousel();
        }

        const moveToPrevItem = () => {
            if(activeIndex == 0) {
                activeIndex = carouselItems.length - 1;
            } else {
                activeIndex--;
            }
            reAlignCarousel();
        }

        const addButtonsToCarousel = () => {
            const prevButtonElement = document.createElement('div');
            prevButtonElement.classList.add('carousel__button-prev');
            
            const nextButtonElement = document.createElement('div');
            nextButtonElement.classList.add('carousel__button-next');

            prevButtonElement.addEventListener('click', moveToPrevItem);
            nextButtonElement.addEventListener('click', moveToNextItem);
            
            carouselElement.appendChild(prevButtonElement);
            carouselElement.appendChild(nextButtonElement);
        }

        const bindClickEventForItems = () => {
            carouselElement.addEventListener('click', e => {
                const targetElement = e.path.filter(element => element.classList && element.classList.contains('carousel__item'))[0];
                if(!targetElement)
                return;
                const indexCSSClasses = ['carousel__item-next-next', 'carousel__item-next', 'carousel__item-prev', 'carousel__item-prev-prev'];
                const indexCSSClass = indexCSSClasses.filter(cssClass => targetElement.classList.contains(cssClass))[0];
                switch(indexCSSClass) {
                    case 'carousel__item-next-next':
                    case 'carousel__item-next':
                        moveToNextItem();
                        break;
                    case 'carousel__item-prev-prev':
                    case 'carousel__item-prev':
                        moveToPrevItem();
                }
            })
        }

        const initializeCarousel = () => {
            switch(carouselItems.length) {
                case 0:
                    return;
                case 1:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    break;
                case 2:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[1]);
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    break;
                case 3:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                    cloneElementAndAppendToCarousel(carouselItems[1]);
                    break;
                case 4:
                    cloneElementAndAppendToCarousel(carouselItems[0]);
                break;
            }
            carouselItems = el.querySelectorAll('.carousel__item')
            reAlignCarousel();

            addButtonsToCarousel();

            bindClickEventForItems();
        }
        initializeCarousel();
        console.log('DAMAN', carouselItems[0])
    }
    linearCarousel(document.querySelector('.horizontal-carousel'));
})();












