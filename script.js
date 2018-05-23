
var lastScrollPos = 0;

$(window).on("scroll", function() {
  var st = $(this).scrollTop();
  /*if(lastScrollPos > st) {$(".bar").css("top", 0);}
  else {$(".bar").css("top", -100);}
  lastScrollPos = st;*/

  var docH = $(".main-container").height() + 170;
  console.log(st);
  var winH = $(this).height();
  var totalScroll = (st/(docH-winH))*100;
  $(".bar").val(totalScroll);
});
