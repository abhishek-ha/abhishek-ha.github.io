$(function () {
  $("#box4words").wordsrotator({
    words: ['<img class="img-circle" src="assets/images/1.jpg" />', '<img class="img-circle" src="assets/images/2.jpg" />'],
    animationIn: "fadeIn",
    animationOut: "fadeOut",
    speed: 300000
  });;

  $("#box6words").wordsrotator({
    words: ['Wellness', 'Dental', 'Children & Family', 'Preventive HealthCare', 'Opthal', 'Cronic Care', 'Gynaecologists', 'Mental Health', 'Sexual Health'],
    animationIn: "fadeInDown",
    animationOut: "fadeOut",
    speed: 300000
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



