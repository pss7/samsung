$(function () {

  /* 헤더 */
  $('#header .depth01 li h2 a').mouseover(function () {
    $('#header .menuBox').removeClass('hidden');
    $('#header .depth01 li h2 a').parent().removeClass('active');
    $(this).parent().addClass('active');
  });

  $('.menuBox').mouseleave(function () {
    $('#header .menuBox').addClass('hidden');
    $('#header .depth01 li h2 a').parent().removeClass('active');
  });

  $(window).load(function () {
    $('#header').addClass('active');
    $('.subTopText').addClass('active');
    $('.subTitleBox .subTopImg').addClass('active')
  });

  $('#header .munuBtn').click(function () {
    $('#header .menuWrap').addClass('active');
    $('body').addClass('fixed');
  });
  $('#header .closeBtn').click(function () {
    $('#header .menuWrap').removeClass('active');
    $('body').removeClass('fixed');
  });

});