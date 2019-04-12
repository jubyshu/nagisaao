$("#back-top").hide();
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$("#back-top").fadeIn();
		} else {
			$("#back-top").fadeOut();
		}
	});
	$("#back-top a").click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

$(document).ready(function() {
	let dateBegin = new Date("2015/01/03 23:15:15");
	let dateEnd = new Date();
	let dateDiff = dateEnd.getTime() - dateBegin.getTime();
	let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
	let timeLeft = dateDiff % (24 * 3600 * 1000);
	let hours = Math.floor(timeLeft / (3600 * 1000));
	let time = dayDiff + "d " + hours + "h";
	$("#runtime").html(time);
});

let toc = document.querySelector(".post-toc");
function tocShow() {
  let clientHeight = document.documentElement.clientHeight;	
	let clientWidth = document.documentElement.clientWidth;
	let tocWrapper = document.querySelector(".content-wrapper__inner");
  let leftMargin = (clientWidth - tocWrapper.clientWidth) / 2 - toc.clientWidth - 50;
	if (toc.clientHeight < clientHeight * 0.6 && leftMargin >= 50) {
		toc.style.visibility = "visible";
	} else {
		toc.style.visibility = "hidden";
	}
}
if ( !! toc) {
	window.addEventListener("resize", tocShow, false);
	tocShow();
}

function tocScroll(){
 let alis = $('.post :header');
 let toc_alis = $('.post-toc').find('a');
 let scroll_height = $(window).scrollTop();
 for(let i =0; i<alis.length; i++){
   let a_height = $(alis[i]).offset().top;
   if (a_height < scroll_height){
     toc_alis.removeClass('active');
     $(toc_alis[i]).addClass('active');
   }
 }
}
$(function() {
 $(window).bind('scroll',tocScroll); 
});

let imgArr = document.querySelectorAll('.post-img');
for (let i = 0; i < imgArr.length; i++) {
  imgArr[i].onclick = function() {
    window.open(imgArr[i].src, '_self');
  };
}