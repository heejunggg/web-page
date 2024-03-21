// .fixed를 추가했다가 삭제했따가.
//스크롤했을떄 어느지점에서 .fixed를 추가하는지
//scrolltop이 0보다 크면.

let mainNav = $("#main-nav");

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    mainNav.addClass("fixed");
    // fixed가 추가될 때 이미지 변경
    $("#logo img").attr("src", "img/logo-color.svg");
  } else {
    mainNav.removeClass("fixed");
    // fixed가 제거될 때 원래 이미지로 변경
    $("#logo img").attr("src", "img/logo.svg");
  }
});
/*
let header = $('.header');
$(window).scroll(function(){
	if($(this).scrollTop() > 0){
		header.addClass('fixed');
	}else {
		header.removeClass('fixed');
	}

));


*/
