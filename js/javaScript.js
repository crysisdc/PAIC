$(document).ready(function () {
	$('#next-patient').click(function() {
		$('.a-one').removeClass('active');
		$('.a-two').addClass('active');		
	})
	$('#back-guide').click(function() {
		$('.a-one').addClass('active');
		$('.a-two').removeClass('active');
	})
	$('#presentation').click(function() {
		$('.a-three').addClass('active');
		$('.a-two').removeClass('active');
	})
	$('#back-patient').click(function() {
		$('.a-three').removeClass('active');
		$('.a-two').addClass('active');
	})
	$('#next-submit').click(function() {
		$('.a-three').removeClass('active');
		$('.a-four').addClass('active');
	})
	$('#back-presentation').click(function() {
		$('.a-three').addClass('active');
		$('.a-four').removeClass('active');
	})
});

$(document).ready(function () {
  $('#div-absolute-1').click(function() {
    $('#hotels-1').removeClass('d-none');
    $('#things-to-do-2').addClass('d-none');
    $('#eat-3').addClass('d-none');
    $('#transport-4').addClass('d-none');    
  })
  $('#div-absolute-2').click(function() {
    $('#hotels-1').addClass('d-none');
    $('#things-to-do-2').removeClass('d-none');
    $('#eat-3').addClass('d-none');
    $('#transport-4').addClass('d-none');
  })
  $('#div-absolute-3').click(function() {
    $('#hotels-1').addClass('d-none');
    $('#things-to-do-2').addClass('d-none');
    $('#eat-3').removeClass('d-none');
    $('#transport-4').addClass('d-none');
  })
  $('#div-absolute-4').click(function() {
    $('#hotels-1').addClass('d-none');
    $('#things-to-do-2').addClass('d-none');
    $('#eat-3').addClass('d-none');
    $('#transport-4').removeClass('d-none');
  })
});







$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="May 28 2019 00:00:00 GMT+0300"; //for Ukraine
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('clockdiv', deadline);
