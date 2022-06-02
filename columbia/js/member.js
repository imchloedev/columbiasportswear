$(document).ready(function () {


  $('.member_tabmenu li').click(function () {
    $(this).addClass('member_on');
    $(this).siblings().removeClass('member_on');
    // $('.loginContent').show();
  });

  $('.member_tabmenu ul li:nth-child(1)').click(function () {
    $('.loginContent').show();
    $('.newAccountContent').hide();
  });


  $('.member_tabmenu ul li:nth-child(2)').click(function () {
    $('.newAccountContent').show();
    $('.loginContent').hide();
  });













  


});