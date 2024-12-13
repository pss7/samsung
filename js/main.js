$(function () {
  const progressCircleContainer = document.querySelector(
    "#visualWrap .circleProgress"
  );

  const mainSwiper = new Swiper("#visualWrap .swiper-container", {
    loop: true,
    slidesPerView: "auto",
    speed: 1300,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#visualWrap .nextBtn",
    },
    on: {
      init: function () {
        $("#visualWrap .textBox").eq(this.activeIndex).addClass("active");
        $("#visualWrap .imgBox").eq(this.activeIndex).addClass("active");
      },
      slideChange: function () {
        $("#visualWrap .textBox").addClass("active");
        $("#visualWrap .textBox").removeClass("active");
        $("#visualWrap .textBox").eq(this.activeIndex).addClass("active");

        $("#visualWrap .imgBox").addClass("active");
        $("#visualWrap .imgBox").removeClass("active");
        $("#visualWrap .imgBox").eq(this.activeIndex).addClass("active");
      },
      autoplayTimeLeft(s, time, progress) {
        if (progressCircleContainer) {
          progressCircleContainer.style.setProperty("--progress", progress);
        }
      },
    },
  });

  /* aos */
  $(window).load(function () {
    AOS.init({
      duration: 2500,
    });
  });

  /* 제품 */
  $("#productWrap .slickWrap .slick").slick({
    variableWidth: true,
    autoplay: false,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    speed: 1500,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  function updateActiveTab(currentSlideIndex) {
    if (currentSlideIndex >= 0 && currentSlideIndex <= 3) {
      $("#productWrap .titleBox .productTab li a").removeClass("active");
      $("#productWrap .titleBox .productTab li:nth-child(1) a").addClass(
        "active"
      );
    } else if (currentSlideIndex >= 4 && currentSlideIndex <= 5) {
      $("#productWrap .titleBox .productTab li a").removeClass("active");
      $("#productWrap .titleBox .productTab li:nth-child(2) a").addClass(
        "active"
      );
    }
  }

  $("#productWrap .slickWrap .slick").on(
    "afterChange",
    function (event, slick, currentSlide) {
      updateActiveTab(currentSlide);
    }
  );

  updateActiveTab(0);

  $("#productWrap .titleBox .productTab li:nth-child(1) a").click(function () {
    $("#productWrap .slickWrap .slick").slick("slickGoTo", 0);
    updateActiveTab(0);
    return false;
  });

  $("#productWrap .titleBox .productTab li:nth-child(2) a").click(function () {
    $("#productWrap .slickWrap .slick").slick("slickGoTo", 4);
    updateActiveTab(4);
    return false;
  });

  /* 스크롤 */
  $(window).scroll(function () {
    var scrollPosition = $(this).scrollTop() + $(this).height() / 2;

    $("#productWrap").each(function () {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        $(this).addClass("active");
      } else {
        // $(this).removeClass('active');
      }
    });
  });
});
