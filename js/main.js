$(function () {

  const progressCircleContainer = document.querySelector("#visualWrap .circleProgress");

  const mainSwiper = new Swiper('#visualWrap .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    speed: 1300,
    // autoplay: {
    //   delay: 8000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '#visualWrap .nextBtn', // Next 버튼 선택자
    },
    on: {
      init: function () {
        $('#visualWrap .textBox').eq(this.activeIndex).addClass('active');
        $('#visualWrap .imgBox').eq(this.activeIndex).addClass('active');
      },
      slideChange: function () {

        $('#visualWrap .textBox').addClass('active');
        $('#visualWrap .textBox').removeClass('active');
        $('#visualWrap .textBox').eq(this.activeIndex).addClass('active');
    
        $('#visualWrap .imgBox').addClass('active');
        $('#visualWrap .imgBox').removeClass('active');
        $('#visualWrap .imgBox').eq(this.activeIndex).addClass('active');
      },
      autoplayTimeLeft(s, time, progress) {
              if (progressCircleContainer) {
          progressCircleContainer.style.setProperty("--progress", progress);  // progress 값을 --progress로 설정
        }
      }
    },
  });
  
  /* aos */
  $(window).load(function () {
    AOS.init({
      duration: 2500
    });
  });

  const swiper = new Swiper('#productWrap .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
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