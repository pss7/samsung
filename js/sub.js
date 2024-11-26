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

  /* 제품 */
  const swiper02 = new Swiper('.productSlide01 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide01 .nextBtn',
      prevEl: '.productSlide01 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide01 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide01 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide01 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper03 = new Swiper('.productSlide02 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide02 .nextBtn',
      prevEl: '.productSlide02 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide02 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide02 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide02 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper04 = new Swiper('.productSlide03 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide03 .nextBtn',
      prevEl: '.productSlide03 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide03 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide03 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide03 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper05 = new Swiper('.productSlide04 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide04 .nextBtn',
      prevEl: '.productSlide04 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide04 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide04 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide04 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper06 = new Swiper('.productSlide05 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide05 .nextBtn',
      prevEl: '.productSlide05 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide05 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide05 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide05 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper07 = new Swiper('.productSlide06 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide06 .nextBtn',
      prevEl: '.productSlide06 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide06 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide06 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide06 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper08 = new Swiper('.productSlide07 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide07 .nextBtn',
      prevEl: '.productSlide07 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide07 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide07 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide07 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper09 = new Swiper('.productSlide08 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide08 .nextBtn',
      prevEl: '.productSlide08 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide08 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide08 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide08 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper10 = new Swiper('.productSlide09 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide09 .nextBtn',
      prevEl: '.productSlide09 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide09 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide09 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide09 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper11 = new Swiper('.productSlide10 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide10 .nextBtn',
      prevEl: '.productSlide10 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide10 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide10 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide10 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper12 = new Swiper('.productSlide11 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide11 .nextBtn',
      prevEl: '.productSlide11 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide11 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide11 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide11 .currentSlide').textContent = currentSlide;
      },
    }

  });

  const swiper13 = new Swiper('.productSlide12 .swiper-container', {
    loop: false,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.productSlide12 .nextBtn',
      prevEl: '.productSlide12 .prevBtn',
    },
    on: {
      init: function () {
        const totalSlides = this.slides.length;
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide12 .totalSlides').textContent = totalSlides;
        document.querySelector('.productSlide12 .currentSlide').textContent = currentSlide;
      },
      slideChange: function () {
        const currentSlide = this.activeIndex + 1;
        document.querySelector('.productSlide12 .currentSlide').textContent = currentSlide;
      },
    }

  });


  /* 탭 */
  $('.productWrap .productList01 li h3 a').click(function () {

    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $('.productWrap .productList01 li h3 a').parent().removeClass('active');
      $(this).parent().addClass('active');
    }

    return false;

  });

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

  $('.searchBox .search > a').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
    return false;
  });

  function initializePopupSwiper(popupClass) {
    return new Swiper(`${popupClass} .swiper-container`, {
      observer: true, // DOM 변경 감지 활성화
      observeParents: true, // 부모 요소의 변경 감지 활성화
      loop: false,  // Loop을 사용할 때 슬라이드 갯수가 왜곡될 수 있습니다.
      slidesPerView: 1,
      navigation: {
        nextEl: `${popupClass} .nextBtn`,
        prevEl: `${popupClass} .prevBtn`,
      },
      on: {
        init: function () {
          this.update();  // swiper.update()로 swiper 인스턴스 갱신
  
          const totalSlides = this.slides.length - this.loopedSlides; // loopedSlides 고려
          const currentSlide = this.activeIndex + 1;  // 슬라이드는 0부터 시작하므로 +1을 해줍니다.
  
          document.querySelector(`${popupClass} .totalSlide`).textContent = totalSlides;
          document.querySelector(`${popupClass} .currentSlide`).textContent = currentSlide;
        },
        slideChange: function () {
          const currentSlide = this.activeIndex + 1;
          document.querySelector(`${popupClass} .currentSlide`).textContent = currentSlide;
        },
      }
    });
  }
  
  // 팝업 1부터 6까지 초기화
  const popupSwiper01 = initializePopupSwiper('.solutionsWrap .popup01');
  const popupSwiper02 = initializePopupSwiper('.solutionsWrap .popup02');
  const popupSwiper03 = initializePopupSwiper('.solutionsWrap .popup03');
  const popupSwiper04 = initializePopupSwiper('.solutionsWrap .popup04');
  const popupSwiper05 = initializePopupSwiper('.solutionsWrap .popup05');
  const popupSwiper06 = initializePopupSwiper('.solutionsWrap .popup06');
  
  // 팝업 열기 및 닫기 동작
  $('.popupClick01').click(function () {
    $('.solutionsWrap .popup01').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popupClick02').click(function () {
    $('.solutionsWrap .popup02').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popupClick03').click(function () {
    $('.solutionsWrap .popup03').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popupClick04').click(function () {
    $('.solutionsWrap .popup04').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popupClick05').click(function () {
    $('.solutionsWrap .popup05').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popupClick06').click(function () {
    $('.solutionsWrap .popup06').show();
    $('.solutionsWrap .bg').show();
  });
  
  $('.popup .closeBtn').click(function () {
    $('.popup').hide();
    $('.solutionsWrap .bg').hide();
  });

  $('.solutionsWrap .bg').click(function () {
    $('.popup').hide();
    $('.solutionsWrap .bg').hide();
  });
  
});