$(function () {

  const swiper01 = new Swiper('.solutionsWrap .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    breakpoints: {
      414: {
        centeredSlides: true,
        slidesPerView: '1',
      },
    }
  });

  const swiper02 = new Swiper('.productWrap .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productWrap .nextBtn',
      prevEl: '.productWrap .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.totalSlides').textContent = totalSlides;
        document.querySelector('.currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.currentSlide').textContent = currentSlide;
      },
    }

  });

  $('.productWrap .productList01 li h3 a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().addClass('active');
    }

    return false;

  });


});