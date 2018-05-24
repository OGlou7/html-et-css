
var lastScrollPos = 0;

$(window).on("scroll", function() {
  var st = $(this).scrollTop();

  var docH = $(".main-container").height() + 170;
  console.log(st);
  var winH = $(this).height();
  var totalScroll = (st/(docH-winH))*100;
  $(".bar").val(totalScroll);
});

$(function(){
var lastScrollTop = 0;
var delta = 5;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if(Math.abs(lastScrollTop - st) <= delta)
      return;
      if (st > lastScrollTop){
          $("#menu").css({top:'-138px'})
          .hover(function(){$("#menu").css({top: '0px'})})
      } else {
         $("#menu").css({top:'0px'});
      }
   lastScrollTop = st;
});
});
