$(document).ready(function(){
  // menu 
  $('.gnb > li').mouseover(function(){
    $('.lnb').removeClass('on');
    $(this).find('.lnb').addClass('on');
  })

    $('.gnb').mouseleave(function(){
    $('.lnb').removeClass('on');
  })

  //swiper
  var slide_01 = new Swiper('.slide_01', {
      navigation: {
        nextEl: '.slide01 .next',
        prevEl: '.slide01 .prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      autoplay: {
        delay: 2500,
      },
      parallax: true,
      speed:2000,
      loop: true,
  });

  var slide_02 = new Swiper('.slide_02', {
      simulateTouch:false,
      effect:'fade',
      loop: true,
  });

  var slide_03 = new Swiper('.slide_03', {
      parallax: true,
      speed:2000,
      simulateTouch:false,
      loop: true,
  });

  slide_01.controller.control = slide_03
  slide_03.controller.control = slide_02

  //aos 
  AOS.init() ; 
  AOS.init({
    duration: 1000
  })


  // type_list 
  $('.type_list li').click(function(){
    idx = $(this).index()+1;
    $('.type_list li').removeClass('active');
    $(this).addClass('active');
    $('.prd_list_wrap .prd_list').removeClass('active');
    $('#prdList'+idx).addClass('active');
  })


  // family-site on/off
  $('.drop_link').on('click', function(){
    $(this).toggleClass('active');
  });



});