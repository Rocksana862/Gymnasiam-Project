/***1st Custom js START***/

$('.bnr_slider').slick({
  dots: true,
  arrows:false,
  autoplay:true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, 
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/***1st Custom js ENDS***/
/***2nd Custom js START***/

$('.venobox').venobox(); 

/***2nd Custom js ENDS***/
/*** 3rd Custom js START***/
$('.team-slider').slick({
  dots:false,
  arrows:false,
  autoplay:true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
      }
    }, 
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
/*** 3rd Custom js ENDS***/
/*** 4th Custom js START***/

$('.test_slider').slick({
  dots:true,
  arrows:false,
  autoplay:true,
  speed: 900,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
      }
    }, 
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*** 4th Custom js ENDS***/
/*** 5th Custom js START***/

   jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
/*** 5th Custom js ENDS***/
/*** 6th Custom js START***/
$('.center').slick({
  centerMode: true,
  autoplay:true,
  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/*** 6th Custom js ENDS***/
/*** 7th Custom js START***/

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});











/*** 7th Custom js ENDS***/