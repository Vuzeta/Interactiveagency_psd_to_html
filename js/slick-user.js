$(document).ready(function() {
    $('.portfolio__list').slick({
      centerPadding: '60px',
      dots: false,
      /* Just changed this to get the bottom dots navigation */
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    });
  });