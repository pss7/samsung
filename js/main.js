$(function () {

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    on: {
      slideChange: function () {
        $('.productTab a').removeClass('active');
        if (this.realIndex >= 0 && this.realIndex <= 4) {
          $('.productTab li:nth-child(1) a').addClass('active');
        } else if (this.realIndex >= 5 && this.realIndex <= 7) {
          $('.productTab li:nth-child(2) a').addClass('active');
        }
      }
    },

    breakpoints: {
      414: {

        centeredSlides: true,
        slidesPerView: 'auto',
      },
    }
  });

  if (swiper.realIndex >= 0 && swiper.realIndex <= 4) {
    $('.productTab li:nth-child(1) a').addClass('active');
  } else if (swiper.realIndex >= 5 && swiper.realIndex <= 7) {
    $('.productTab li:nth-child(2) a').addClass('active');
  }

  $('.productTab a').click(function (e) {

    e.preventDefault();
    $('.productTab a').removeClass('active');
    $(this).addClass('active');

    const index = $(this).parent().index();

    if (index === 0) {
      swiper.slideTo(0);
    } else if (index === 1) {
      swiper.slideTo(5);
    }

  });

  /* 스크롤 */
  $(window).scroll(function () {

    var scrollPosition = $(this).scrollTop() + $(this).height() / 2;

    $('#productWrap').each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        $(this).addClass('active');
      } else {
        // $(this).removeClass('active');
      }
    });

  });

});