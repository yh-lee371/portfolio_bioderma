$(document).ready(function(){
  $('#banner').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  // a [href] remove
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

  // family-site on/off
  $('.drop_link').on('click', function(){
    $(this).toggleClass('active');
  });



});