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

  const swiper02 = new Swiper('.tabContentSlide01 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.tabContentSlide01 .nextBtn',
      prevEl: '.tabContentSlide01 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide01 .totalSlides').textContent = totalSlides;
        document.querySelector('.tabContentSlide01 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide01 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper03 = new Swiper('.tabContentSlide02 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.tabContentSlide02 .nextBtn',
      prevEl: '.tabContentSlide02 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide02 .totalSlides').textContent = totalSlides;
        document.querySelector('.tabContentSlide02 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide02 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper04 = new Swiper('.tabContentSlide03 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.tabContentSlide03 .nextBtn',
      prevEl: '.tabContentSlide03 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide03 .totalSlides').textContent = totalSlides;
        document.querySelector('.tabContentSlide03 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.tabContentSlide03 .currentSlide').textContent = currentSlide;
      },
    }

  });

  /* 제품 */
  $('.productWrap .productList01 li h3 a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $('.productWrap .productList01 li h3 a').parent().removeClass('active');
      $(this).parent().addClass('active');
    }

    return false;

  });

  /* 탭 */
  $('.tabBox01 .tabContent01').hide();
  $('.tabBox01 .tabContent01').first().show();

  $('.productWrap .tab li').click(function () {
    $('.productWrap .tab li').children().removeClass('active');
    $(this).children().addClass('active');

    var Idx = $(this).index();

    $('.tabBox01 .tabContent01').hide();
    $('.tabBox01 .tabContent01').eq(Idx).show();

    return false
  });

  $('.productContent01').hide();
  $('.productContent01').first().show();

  $('.productTab01 li').click(function () {
    $('.productTab01 li').children().removeClass('active');
    $(this).children().addClass('active');

    var Idx = $(this).index();

    $('.productContent01').hide();
    $('.productContent01').eq(Idx).show();

    return false;
  });

  $('.productContent02').hide();
  $('.productContent02').first().show();

  $('.productTab02 li').click(function () {
    $('.productTab02 li').children().removeClass('active');
    $(this).children().addClass('active');

    var Idx = $(this).index();

    $('.productContent02').hide();
    $('.productContent02').eq(Idx).show();

    return false;
  });

  $('.productContent03').hide();
  $('.productContent03').first().show();

  $('.productTab03 li').click(function () {
    $('.productTab03 li').children().removeClass('active');
    $(this).children().addClass('active');

    var Idx = $(this).index();

    $('.productContent03').hide();
    $('.productContent03').eq(Idx).show();

    return false;
  });

});