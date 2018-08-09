jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
});

$(document).ready(function(){
  function getHour(){
  var date = new Date(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds(),
      weekDay = date.getDay(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      week = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      textMonth = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'August', 'septiembre', 'octubre', 'noviembre', 'diciembre'], amOrPm;

    $('#weekDay').text(week[weekDay]+',');
    $('#day').text(day);
    $('#month').text(textMonth[month]);
    $('#year').text(year);

    if(hour >= 12){
      hour = hour - 12;
      amOrPm = 'P.M';
    }else{
      amOrPm = 'A.M';
    } if(hour==0){
         hour= 12;
             }
    if(minutes<10){
        minutes = '0'+minutes;
                      }
   if(hour<10){
      hour='0'+hour;
   }
    if(seconds<10){
      seconds='0'+seconds;
    }
     $('#hour').text(hour);
    $('#minutes').text(minutes);
    $('#amOrPm').text(amOrPm);
    $('#seconds').text(seconds);
  }
  setInterval(getHour, 1000);

});
jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
$(".email-signup").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email- login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});
