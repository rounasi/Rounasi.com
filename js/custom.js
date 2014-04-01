//*----------------------------------------------------*/
/* Remove Gray Highlight When Tapping Links in Mobile Safari
/*----------------------------------------------------*/
document.addEventListener("touchstart", function(){}, true);
//*----------------------------------------------------*/
/* Counter
/*----------------------------------------------------*/
function serverTime() {
    var time = null;
    var outtext;

    $.ajax({
        url: 'js/sync.php',
        async: false,
        dataType: 'text',
        success: function (text) {
            time = new Date(text);
            outtext = text;
        },
        error: function (http, message, exc) {
            time = new Date();
        }
    });
    return time;
}


var countingTime;
var newTime = 0;
var STEPS = 250;
var currStep = 0;
$(window).load(function() {

    $('.customCountdown').countdown({

        since: new Date(2000, 1 - 1, 29),
        serverSync: serverTime,
        format: 'HM'
    });

    countingTime = (Number)($('.customCountdown').text());
    setTimeout(inputTime, 2500);

});



function inputTime() {
    newTime += Math.round(countingTime / STEPS);
    currStep++;
    $('#sinceCountdown').html(newTime);
    if (currStep < STEPS) {
        setTimeout(inputTime, 0.5);
    } else {

        $('#sinceCountdown').html(countingTime);
		$('#sinceCountdown:after').css('display','block');
    }
}

console.log()
//*----------------------------------------------------*/
/* make Intro height of window
/*----------------------------------------------------*/

$(function () {
    $('#intro').css({
        'height': ($(window).height()+15) + 'px'
    });
    $(window).resize(function () {
        $('#intro').css({
            'height': ($(window).height()) + 'px'
        });
    });
});

//*----------------------------------------------------*/
/* custom scrollbar
/*----------------------------------------------------*/

$(document).ready(
    function () {
        $("html").niceScroll();
    }
);

//*----------------------------------------------------*/
/* smooth scroll on page
/*----------------------------------------------------*/

$(function () {
    $('#more a, .nav a, .nav li a, #footer li a, #testimony a,#sectionNav .navbar-inner .nav.pull-right li a').bind('click', function (event) {
        var $anchor = $(this);

        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
        });

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 61
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});

//*----------------------------------------------------*/
/* collapse menu on click on mobile and tablet devices
/*----------------------------------------------------*/

$('.nav a').click(function () {
    $(".nav-collapse").collapse("hide")
});

/*----------------------------------------------------*/
/* NAVIGATION WHILE SCROLLING
/*----------------------------------------------------*/

if ($(window).scrollTop() > $(window).height()) {
    $('#navigation').addClass('scroll');
} else {
    $('#navigation').removeClass('scroll');
}


$(window).on("scroll", function () {
    var winHeight = $(window).height();
    var windowWidth = $(window).width();
    var windowScroll = $(window).scrollTop();


    if ($(window).scrollTop() > $(window).height()) {
        $('#navigation').addClass('scroll');
        $('#navigation').removeClass('fadeInDown');
		$('#sectionNav').css('display','block');
	
		
    } else {
        $('#navigation').removeClass('scroll');
        $('#navigation').addClass('fadeIn');
		$('#sectionNav').css('display','none');
		
    }


});

/*----------------------------------------------------*/
/* INTRO ANIMATION EFFECT
/*----------------------------------------------------*/

$('#navigation').css('margin-top','-200px');

$(window).load(function () {
	$('#intro').addClass('fadeIn delay05s animated ');
	
    $('#fittext1').addClass('slideDown delay1s animated');
	
	
	
	
	$('#navigation').delay(2000).animate({
            'margin-top': '0',
        }, 2000, 'easeInOutExpo');	
		
		
	$('#fittext4').addClass('slideUp animated delay25s');
	
    $('#fittext2').addClass('fadeIn delay3s animated ');
	
    $('#sinceCountdown').addClass('fadeIn delay35s animated');	
	
	$('#myPic1').addClass('fadeIn delay4s animated ');	
	
		
	$('#myPic1').addClass('fadeOut delay45s animated ');
	
	
    $('#more').addClass('fadeIn animated delay6s');
	
	$('#myPic2').addClass('fadeIn delay45s animated ');	
	
	$('#myPic2').addClass('fadeOut delay5s animated ');
	
	$('#myPic3').addClass('fadeIn delay5s animated ');
	$('#myPic4').addClass('fadeIn delay5s animated ');
	
	

	$('footer').addClass('fadeIn delay4s animated ');
	
	
    $('#awwwards').addClass('fadeIn animated delay2s');
	$('#w3').addClass('fadeIn animated delay1s');
	$('#cssaw').addClass('fadeIn animated delay2s');
	$('#cssdesignawards').addClass('fadeIn animated delay15s');
});

var animateText = function (object) {
    setTimeout(function () {
        object.find('.big-logo, .overview').addClass('active');
    }, 700);
	 setTimeout(function () {
        object.find('.row img').addClass('active');
    }, 500);
	 setTimeout(function () {
        object.find('h1.header').addClass('active');
    }, 100);
}




$(window).scroll(function () {
    $('section').each(function (i) {

        var bottom_of_object = $(this).position().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        

        if (bottom_of_window > bottom_of_object ) {

            animateText($(this));
			
		
            
        }
		
    });
});


/*----------------------------------------------------*/
/* 
/*----------------------------------------------------*/


 
 
 
 var lastItem = document.querySelector( '.last-item' );
 var footer = document.querySelector( 'footer' );
  var testimonial = document.querySelector( '#testimonial' );
 
 
 var height = window.innerHeight;
 
 lastItem.style.marginBottom = height + "px";
 footer.style.height = height + "px";
 

 

 
 $('.testblock').click(function () {
    $('#canvas').addClass('fadeOut animated');
});


$('#sydney').mouseover(function () {
    $('canvas').removeClass('fadeOut').addClass('fadeIn animated');
      
   
});

/*----------------------------------------------------*/
/* Testimonial Slider
/*----------------------------------------------------*/
jQuery(function($){				
	$('#slider1').flexslider({
		animation: "fade",
		directionNav:true,
		controlNav:false,
		smoothHeight: true,
		animationLoop:true,
		slideshowSpeed: 6000,		
		slideToStart: 0,
	});
	$('#slider2').flexslider({
		animation: "slide",
		directionNav:true,
		controlNav:false,		
		smoothHeight: true,
		animationLoop:true,
		sync: "#slider1",
		slideshowSpeed: 6000,			
		slideToStart: 0,
	});
});
 
/*----------------------------------------------------*/
/* signature
/*----------------------------------------------------*/
 $(window).load(function () {
    var stage = new swiffy.Stage(document.getElementById('mySignature'),swiffyobject);
    stage.start()}
);


/*----------------------------------------------------*/
/* full screen
/*----------------------------------------------------*/

$('a .icon2-resize-small').hide();

$('a .icon2-resize-full').click(function () {
    launchFullscreen(document.documentElement);
	$('a .icon2-resize-full').hide();
	$('a .icon2-resize-small').show();
});

$('a .icon2-resize-small').click(function () {
    cancelFullscreen();
	$('a .icon2-resize-full').show();
	$('a .icon2-resize-small').hide();
});


function launchFullscreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

function cancelFullscreen() {
  if(document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  }
}

function dumpFullscreen() {
  console.log("document.fullScreenElement is: ", document.fullScreenElement || document.mozFullScreenElement || document.webkitFullScreenElement);
  console.log("document.fullScreenEnabled is: ", document.fullScreenEnabled || document.mozScreenEnabled || document.webkitScreenEnabled);
}

// Events
document.addEventListener("fullscreenchange", function(e) {
  console.log("fullscreenchange event! ", e);
});
document.addEventListener("mozfullscreenchange", function(e) {
  console.log("mozfullscreenchange event! ", e);
});
document.addEventListener("webkitfullscreenchange", function(e) {
  console.log("webkitfullscreenchange event! ", e);
});

// Add different events for fullscreen

/*----------------------------------------------------*/
/* Expand
/*----------------------------------------------------*/


$('#sxshare .closeBtn').css('display','none');

$(" #sxshare .span8 img" ).hover(function() {
  $('#sxshare .span8 .click-enlarge').delay(200).animate({
            'opacity': '1',
        }, 200, 'easeInOutExpo');
  
}, function() {
 $('#sxshare .span8 .click-enlarge').delay(200).animate({
            'opacity': '0',
        }, 200, 'easeInOutExpo');
});

$(" #sxshare .expand img" ).click(function() {
	$(' #sxshare .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #sxshare .firstTitle').fadeOut('slow').hide();
	
	$('#sxshare .click-enlarge').delay(100).animate({
            'opacity': '0',
        }, 100, 'easeInOutExpo');	
	
	setTimeout(function () {
       $('#sxshare .closeBtn').css('display','block');
	   $(' #sxshare .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #sxshare .closeBtn" ).click(function() {
	$(' #sxshare .secoundTitle').removeClass('fittext5 on');
	$(' #sxshare .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	$(' #sxshare .firstTitle').show();
	
	setTimeout(function () {
       $(' #sxshare .expand img').css('cursor','pointer');
	   $(' #sxshare .closeBtn').css('display','none');
    }, 900);
});

// baccaratiphone////////
$('#baccaratiphone .closeBtn').css('display','none');
$(" #baccaratiphone .expand img" ).click(function() {
	$(' #baccaratiphone .firstTitle').hide();
	$(' #baccaratiphone .expand').switchClass( "span7", "span12", 1000, "easeInOutQuad" );
	$(' #baccaratiphone .expand').addClass('center');
	
	
	setTimeout(function () {
       $('#baccaratiphone .closeBtn').css('display','block');
	   $(' #baccaratiphone .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #baccaratiphone .closeBtn" ).click(function() {
	$(' #baccaratiphone .secoundTitle').removeClass('fittext5 on');
	$(' #baccaratiphone .secoundTitle').css('margin-bottom','-100px');
	$(' #baccaratiphone .expand').switchClass( "span12", "span7", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #baccaratiphone .expand img').css('cursor','pointer');
	   $(' #baccaratiphone .closeBtn').css('display','none');
	   $(' #baccaratiphone .firstTitle').show();
    }, 900);
});

/////kenoipad//////

$('#kenoipad .closeBtn').css('display','none');

$("#kenoipad .span8 img" ).hover(function() {
  $('#kenoipad .span8 .click-enlarge').delay(200).animate({
            'opacity': '1',
        }, 200, 'easeInOutExpo');
  
}, function() {
 $('#kenoipad .span8 .click-enlarge').delay(200).animate({
            'opacity': '0',
        }, 200, 'easeInOutExpo');
});

$(" #kenoipad .expand img" ).click(function() {
	$(' #kenoipad .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #kenoipad .expand').addClass('center');
	
	
	$('#kenoipad .click-enlarge').delay(100).animate({
            'opacity': '0',
        }, 100, 'easeInOutExpo');	
	
	$(' #kenoipad .firstTitle').fadeOut('slow').hide();
	
	setTimeout(function () {
       $(' #kenoipad .closeBtn').css('display','block');
	   $(' #kenoipad .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #kenoipad .closeBtn" ).click(function() {
	$(' #kenoipad .secoundTitle').removeClass('fittext5 on');
	$(' #kenoipad .secoundTitle').css('margin-bottom','-100px');
	$(' #kenoipad .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	$(' #kenoipad .firstTitle').show();
	
	setTimeout(function () {
       $(' #kenoipad .expand img').css('cursor','pointer');
	   $(' #kenoipad .closeBtn').css('display','none');
    }, 900);
});

/////fringilla////// 
$('#fringilla .closeBtn').css('display','none');

$(" #fringilla .span7 img" ).hover(function() {
  $('#fringilla .span7 .click-enlarge').delay(200).animate({
            'opacity': '1',
        }, 200, 'easeInOutExpo');
  
}, function() {
 $('#fringilla .span7 .click-enlarge').delay(200).animate({
            'opacity': '0',
        }, 200, 'easeInOutExpo');
});

$(" #fringilla .expand img" ).click(function() {
	$(' #fringilla .firstTitle').hide();
	$(' #fringilla .expand').switchClass( "span7", "span12", 1000, "easeInOutQuad" );
	
	$('#fringilla .click-enlarge').delay(100).animate({
            'opacity': '0',
        }, 100, 'easeInOutExpo');	
	
	setTimeout(function () {
       $('#fringilla .closeBtn').css('display','block');
	   $(' #fringilla .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #fringilla .closeBtn" ).click(function() {
	$(' #fringilla .secoundTitle').removeClass('fittext5 on');
	$(' #fringilla .secoundTitle').css('margin-bottom','-100px');
	$(' #fringilla .expand').switchClass( "span12", "span7", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #fringilla .expand img').css('cursor','pointer');
	   $(' #fringilla .closeBtn').css('display','none');
	   $(' #fringilla .firstTitle').show();
    }, 900);
});


/////onedrop//////

$('#onedrop .closeBtn').css('display','none');




$("#onedrop .span8 .gallery.items-4" ).hover(function() {
  $('#onedrop .click-enlarge').delay(200).animate({
            'opacity': '1',
        }, 200, 'easeInOutExpo');
  
}, function() {
 $('#onedrop .click-enlarge').delay(200).animate({
            'opacity': '0',
        }, 200, 'easeInOutExpo');
});


$(" #onedrop .gallery img" ).click(function() {
	$(' #onedrop .firstTitle').hide();	
	
	$('#onedrop .click-enlarge').delay(100).animate({
            'opacity': '0',
        }, 100, 'easeInOutExpo');	

	
	$('#onedrop .gallery.items-4').delay(500).animate({
            'margin-top': '-100px',
        }, 1500, 'easeInOutExpo');	
	$('#onedrop .gallery .controls').delay(50).animate({
            'top':'650px',
        }, 500, 'easeInOutExpo');	
	
	$(' #onedrop .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #onedrop .expand').addClass('center');
	

	
	
	setTimeout(function () {
       $('#onedrop .closeBtn').css('display','block');
	   $('#onedrop .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #onedrop .closeBtn" ).click(function() {
	$(' #onedrop .secoundTitle').removeClass('fittext5 on');	
	$('#onedrop .gallery.items-4').delay(50).animate({
            'margin-top': '0',
        }, 1500, 'easeInOutExpo');	
	$('#onedrop .gallery .controls').delay(50).animate({
            'top':'500px',
        }, 1500, 'easeInOutExpo');	
	$(' #onedrop .secoundTitle').css('margin-bottom','-100px');
	$(' #onedrop .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #onedrop .expand img').css('cursor','pointer');
	   $(' #onedrop .closeBtn').css('display','none');
	   $(' #onedrop .firstTitle').show();
    }, 900);
});


/////Frasil//////

$('#frasil .closeBtn').css('display','none');

$(" #frasil .gallery img" ).click(function() {
	$(' #frasil .firstTitle').hide();
	$('#frasil #hint2').animate({
            'margin-top': '-40px',
        }, 500, 'easeInOutExpo');	
	$('#frasil .gallery.items-8').delay(50).animate({
            'margin-top': '-80px',
        }, 1500, 'easeInOutExpo');	
	$(' #frasil .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #frasil .expand').addClass('center');
	

	
	$(' #frasil .secoundTitle').addClass('fittext5 on');
	$(' #frasil .secoundTitle').css('margin-bottom','30px');
	
	
	setTimeout(function () {
       $('#frasil .closeBtn').css('display','block');
	   $('#frasil .expand img').css('cursor','default');
    }, 900);
	
	
});


$("#frasil .closeBtn" ).click(function() {
	$('#frasil #hint2').animate({
            'margin-top': '0px',
        }, 500, 'easeInOutExpo');	
	$('#frasil .gallery.items-8').animate({
            'margin-top': '0px',
        }, 500, 'easeInOutExpo');	
	$(' #frasil .secoundTitle').removeClass('fittext5 on');
	$(' #frasil .secoundTitle').css('margin-bottom','-100px');
	$(' #frasil .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #frasil .expand img').css('cursor','pointer');
	   $(' #frasil .closeBtn').css('display','none');
	   $(' #frasil .firstTitle').show();
    }, 900);
});

/////Frasil User Preferences//////

$('#user-preferences .closeBtn').css('display','none');

$(" #user-preferences .gallery img" ).click(function() {
	$(' #user-preferences .span7').hide();
	$(' h3').hide();
	$(' #user-preferences .expand').switchClass( "span5", "span12", 1000, "easeInOutQuad" );
	$(' #user-preferences .expand').addClass('center');
	

	
	$(' #user-preferences .secoundTitle').addClass('fittext5 on');
	$(' #user-preferences .secoundTitle').css('margin-bottom','30px');
	
	
	setTimeout(function () {
       $('#user-preferences .closeBtn').css('display','block');
	   $('#user-preferences .expand img').css('cursor','default');
    }, 900);
	
	
});


$("#user-preferences .closeBtn" ).click(function() {
	$(' #user-preferences .secoundTitle').removeClass('fittext5 on');
	$(' #user-preferences .secoundTitle').css('margin-bottom','-100px');
	$(' #user-preferences .expand').switchClass( "span12", "span5", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #user-preferences .expand img').css('cursor','pointer');
	   $(' #user-preferences .closeBtn').css('display','none');
	   $(' #user-preferences .firstTitle').show();
    }, 900);
});


/*----*/

