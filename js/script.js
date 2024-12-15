$(function () {
  /* 헤더 */
  $("#header .depth01 li h2 a").mouseover(function () {
    $("#header .menuBox").removeClass("hidden");
    $("#header .depth01 li h2 a").parent().removeClass("active");
    $(this).parent().addClass("active");
  });

  $(".menuBox").mouseleave(function () {
    $("#header .menuBox").addClass("hidden");
    $("#header .depth01 li h2 a").parent().removeClass("active");
  });

  $(window).load(function () {
    $("#header").addClass("active");
    $(".subTopText").addClass("active");
    $(".subTitleBox .subTopImg").addClass("active");
  });

  $("#header .munuBtn").click(function () {
    $("#header .menuWrap").addClass("active");
    $("body").addClass("of");
  });
  $("#header .closeBtn").click(function () {
    $("#header .menuWrap").removeClass("active");
    $("body").removeClass("of");
  });

  /* 상단이동 */
  $("aside .top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("aside").fadeIn();
    } else {
      $("aside").fadeOut();
    }
  });
});
