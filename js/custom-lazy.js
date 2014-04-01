
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
var STEPS = 100;
var currStep = 0;
$(window).load(function() {

    $('.customCountdown').countdown({

        since: new Date(2003, 1 - 1, 29),
        serverSync: serverTime,
        format: 'HM'
    });

    countingTime = (Number)($('.customCountdown').text());
    setTimeout(inputTime, 3000);

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
    $('#more a, .nav a, .nav li a, #footer li a, #testimony a').bind('click', function (event) {
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
    } else {
        $('#navigation').removeClass('scroll');
        $('#navigation').addClass('fadeIn');
    }


});

/*----------------------------------------------------*/
/* INTRO ANIMATION EFFECT
/*----------------------------------------------------*/

$('#navigation').css('margin-top','-200px');

$(window).load(function () {
    $('#fittext1').addClass('slideDown delay3s animated');
    $('#fittext2').addClass('fadeIn delay4s animated ');
    $('#sinceCountdown').addClass('fadeIn delay45s animated');
	$('#navigation').delay(1500).animate({
            'margin-top': '0',
        }, 1500, 'easeInOutExpo', function () {});		
		
	$('#fittext4').addClass('slideUp animated delay45s');
    $('#more').addClass('fadeIn animated delay6s');
	
	
	
	
    $('#awwwards').addClass('fadeIn animated delay2s');
	$('#w3 a').addClass('fadeIn animated delay1s');
});

/*----------------------------------------------------*/
/* Force Load Images
/*----------------------------------------------------

$("img").one('load', function () {
}).each(function () {
    if (this.complete) $(this).load();
})

/*----------------------------------------------------*/
/* Face Intro effect
/*----------------------------------------------------*/

$(window).load(function () {

    $('#myPic3').css('background', 'none');
    $('#myPic').addClass('vanishIn delay1s animated');
    $('#myPic2').addClass('vanishIn delay1s animated');
	setTimeout(function () {
        $('#myPic2').removeClass('vanishIn delay1s animated');
    }, 3800);
    setTimeout(function () {
        $('#myPic2').addClass('fadeOut animated');
    }, 7800);
   setTimeout(function () {
        $('#myPic3').css({
            background: 'url("img/max/old-face.png") no-repeat'
        }).addClass('fadeIn animated');
    }, 6300);

});

/*----------------------------------------------------*/
/* Loading 
/*----------------------------------------------------*/

var animateText = function (object) {
    setTimeout(function () {
        object.find('.contribution-cut, .overview').addClass('active');
    }, 700);
	 setTimeout(function () {
        object.find('.nivoSlider, .row img').addClass('active');
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

          //  animateText($(this));
			
			//jQuery("img.lazy").lazy();
			 //$("img.lazy").lazyload();
			// $("img.unveil").unveil();
			 
			 


            
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
/* nivoSlider
/*----------------------------------------------------*/

 $(document).ready(function () {
	$('.nivoSlider').nivoSlider({
	 effect: 'fade', manualAdvance: true });
 });



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

$(" #sxshare .expand img" ).click(function() {
	$(' #sxshare .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #sxshare .secoundTitle').addClass('fittext5 on');
	$(' #sxshare .firstTitle').fadeOut('slow').hide('fast');
	
	setTimeout(function () {
       $('.closeBtn').css('display','block');
	   $(' #sxshare .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #sxshare .closeBtn" ).click(function() {
	$(' #sxshare .secoundTitle').removeClass('fittext5 on');
	$(' #sxshare .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	$(' #sxshare .firstTitle').show('fast');
	
	setTimeout(function () {
       $(' #sxshare .expand img').css('cursor','pointer');
	   $(' #sxshare .closeBtn').css('display','none');
    }, 900);
});

// baccaratiphone////////
$('#baccaratiphone .closeBtn').css('display','none');

$(" #baccaratiphone .expand img" ).click(function() {
	$(' #baccaratiphone .firstTitle').hide('fast');
	$(' #baccaratiphone .expand').switchClass( "span7", "span12", 1000, "easeInOutQuad" );
	$(' #baccaratiphone .expand').addClass('center');

	
	$(' #baccaratiphone .secoundTitle').addClass('fittext5 on');
	$(' #baccaratiphone .secoundTitle').css('margin-bottom','30px');
	
	
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
	   $(' #baccaratiphone .firstTitle').show('fast');
    }, 900);
});

/////kenoipad//////

$('#kenoipad .closeBtn').css('display','none');

$(" #kenoipad .expand img" ).click(function() {
	$(' #kenoipad .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #kenoipad .expand').addClass('center');
	$(' #kenoipad .secoundTitle').addClass('fittext5 on');
	$(' #kenoipad .secoundTitle').css('margin-bottom','30px');
	$(' #kenoipad .firstTitle').fadeOut('slow').hide('fast');
	
	setTimeout(function () {
       $(' #kenoipad .closeBtn').css('display','block');
	   $(' #kenoipad .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #kenoipad .closeBtn" ).click(function() {
	$(' #kenoipad .secoundTitle').removeClass('fittext5 on');
	$(' #kenoipad .secoundTitle').css('margin-bottom','-100px');
	$(' #kenoipad .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	$(' #kenoipad .firstTitle').show('fast');
	
	setTimeout(function () {
       $(' #kenoipad .expand img').css('cursor','pointer');
	   $(' #kenoipad .closeBtn').css('display','none');
    }, 900);
});

/////fringilla//////

$('#fringilla .closeBtn').css('display','none');

$(" #fringilla .expand img" ).click(function() {
	$(' #fringilla .firstTitle').hide('fast');
	$(' #fringilla .expand').switchClass( "span7", "span12", 1000, "easeInOutQuad" );
	$(' #fringilla .expand').addClass('center');

	
	$(' #fringilla .secoundTitle').addClass('fittext5 on');
	$(' #fringilla .secoundTitle').css('margin-bottom','30px');
	
	
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
	   $(' #fringilla .firstTitle').show('fast');
    }, 900);
});

/////Rubytigers//////

$('#rubytigers .closeBtn').css('display','none');

$(" #rubytigers .gallery img" ).click(function() {
	$(' #rubytigers .firstTitle').hide('fast');
	$(' #rubytigers .expand').switchClass( "span9", "span12", 1000, "easeInOutQuad" );
	$(' #rubytigers .expand').addClass('center');
	

	
	setTimeout(function () {
       $('#rubytigers .closeBtn').css('display','block');
	   $('#rubytigers .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #rubytigers .closeBtn" ).click(function() {
	$(' #rubytigers .expand').switchClass( "span12", "span9", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #rubytigers .expand img').css('cursor','pointer');
	   $(' #rubytigers .closeBtn').css('display','none');
	   $(' #rubytigers .firstTitle').show('fast');
    }, 900);
});

// spuriphone////////
$('#spuriphone .closeBtn').css('display','none');

$(" #spuriphone .expand img" ).click(function() {
	$(' #spuriphone .firstTitle').hide('fast');
	$(' #spuriphone .expand').switchClass( "span7", "span12", 1000, "easeInOutQuad" );
	$(' #spuriphone .expand').addClass('center');

	
	$(' #spuriphone .secoundTitle').addClass('fittext5 on');
	$(' #spuriphone .secoundTitle').css('margin-bottom','30px');
	
	
	setTimeout(function () {
       $('#spuriphone .closeBtn').css('display','block');
	   $(' #spuriphone .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #spuriphone .closeBtn" ).click(function() {
	$(' #spuriphone .secoundTitle').removeClass('fittext5 on');
	$(' #spuriphone .secoundTitle').css('margin-bottom','-100px');
	$(' #spuriphone .expand').switchClass( "span12", "span7", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #spuriphone .expand img').css('cursor','pointer');
	   $(' #spuriphone .closeBtn').css('display','none');
	   $(' #spuriphone .firstTitle').show('fast');
    }, 900);
});

/////hotspur//////

$('#hotspur .closeBtn').css('display','none');

$(" #hotspur .gallery img" ).click(function() {
	$(' #hotspur .firstTitle').hide('fast');
	$(' #hotspur .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #hotspur .expand').addClass('center');
	$('#hotspur .closeBtn').css('top','300px');

	
	
	
	setTimeout(function () {
       $('#hotspur .closeBtn').css('display','block');
	   $('#hotspur .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #hotspur .closeBtn" ).click(function() {
	$(' #hotspur .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #hotspur .expand img').css('cursor','pointer');
	   $(' #hotspur .closeBtn').css('display','none');
	   $(' #hotspur .firstTitle').show('fast');
    }, 900);
});

/////onedrop//////

$('#onedrop .closeBtn').css('display','none');

$(" #onedrop .gallery img" ).click(function() {
	$(' #onedrop .firstTitle').hide('fast');
	$(' #onedrop .expand').switchClass( "span8", "span12", 1000, "easeInOutQuad" );
	$(' #onedrop .expand').addClass('center');
	

	
	$(' #onedrop .secoundTitle').addClass('fittext5 on');
	$(' #onedrop .secoundTitle').css('margin-bottom','30px');
	
	
	setTimeout(function () {
       $('#onedrop .closeBtn').css('display','block');
	   $('#onedrop .expand img').css('cursor','default');
    }, 900);
	
	
});


$(" #onedrop .closeBtn" ).click(function() {
	$(' #onedrop .secoundTitle').removeClass('fittext5 on');
	$(' #onedrop .secoundTitle').css('margin-bottom','-100px');
	$(' #onedrop .expand').switchClass( "span12", "span8", 1000, "easeInOutQuad" );
	
	
	setTimeout(function () {
       $(' #onedrop .expand img').css('cursor','pointer');
	   $(' #onedrop .closeBtn').css('display','none');
	   $(' #onedrop .firstTitle').show('fast');
    }, 900);
});
