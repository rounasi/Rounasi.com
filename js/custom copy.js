//Counter
/*function serverTime() {
    var time = null;
    $.ajax({
        url: 'js/sync.php',
        async: false,
        dataType: 'text',
        success: function (text) {
            time = new Date(text);
        },
        error: function (http, message, exc) {
            time = new Date();
        }
    });
    return time;
}
$('#sinceCountdown').countdown({
    since: new Date(2003, 1 - 1, 29),
    serverSync: serverTime,
    format: 'HM'
});
/*----------------------------------------------------*/

//New Counter

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
$(function () {

    $('.customCountdown').countdown({

        since: new Date(2003, 1 - 1, 29),
        serverSync: serverTime,
        format: 'HM'
    });

    countingTime = (Number)($('.customCountdown').text());
    setTimeout(inputTime, 30);

});



function inputTime() {

    newTime += Math.round(countingTime / STEPS);
    currStep++;
    $('#sinceCountdown').html(newTime);
    if (currStep < STEPS) {
        setTimeout(inputTime, 30);
    } else {
        $('#sinceCountdown').html(countingTime);
    }

}

console.log()

/*------------------------------------------*/

       /*     function serverTime() {
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
			var STEPS = 20;
			var currStep = 0;
			$(function(){
				$('#cd').countdown({
					since: new Date(2003, 1 - 1, 29),
					serverSync: serverTime,
					format: 'HM'
				});
				countingTime = (Number)($('#cd').text());
				inputTime(currStep);
			});
			
			function inputTime(num) {
				$('#cont_b').html(newTime).show();
				//console.log("inputType num:", num);
				newTime += Math.round(countingTime/STEPS);
				currStep++;
				$('#cont_a').css('display', 'none').html(newTime).fadeIn(500, function(){
					//console.log("a faded in", currStep);
				});
				var before = (new Date()).getTime();
				//console.log("before");
				$('#cont_b').fadeOut(500, function(){	
					//console.log("in delta", (new Date()).getTime() - before);
					if(currStep < STEPS) {
						inputTime(currStep)
					}
					else {
						$('#cont_a').css('display', 'none').html(countingTime).fadeIn(500, function(){});
					}
				});
			}

*/
//make section height of window
$(function () {
    $('#intro').css({
        'height': ($(window).height()) + 'px'
    });
    $(window).resize(function () {
        $('#intro').css({
            'height': ($(window).height()) + 'px'
        });
    });
});

//custom scrollbar
$(document).ready(
    function () {
        $("html").niceScroll();
    }
);


//smooth scroll on page
$(function () {
    $('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click', function (event) {
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

//gallery image hover tooltip trigger
$("[data-thumb=tooltip]").tooltip();

//collapse menu on click on mobile and tablet devices
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
        $('#navigation').addClass('fadeInDown');
    }


});
/*----------------------------------------------------*/
/* INTRO ANIMATION EFFECT
/*----------------------------------------------------*/
$(window).load(function () {
    $('#fittext1').addClass('vanishIn delay1s animated');
    $('#fittext2').addClass('fadeIn delay3s animated ');
    $('span#sinceCountdown, sup').addClass('fadeIn delay3s animated');
    $('.navbar').addClass('animated fadeInDown delay05s');
    $('div#more').addClass('vanishIn animated delay3s');
	$('div#awwwards').addClass('fadeIn animated delay2s');
	$('div#cssda').addClass('fadeInUp animated delay35s');
	$('div#htmlins').addClass('fadeInUp animated delay4s');
	$('div#csswinner').addClass('fadeInUp animated delay45s');
});


/*$(window).load(function () {
	$('#myPic').addClass('vanishIn delay1s animated').fadeOut(5000, function () {
		
		$('#myPic').css({background: 'url("img/max-rounasi-old-1.png") no-repeat'}); // UK
		
		
	}).fadeIn(500).fadeOut(300, function () {
		
		$('#myPic').css({background: 'url("img/max-rounasi-old-2.png") no-repeat'}); // Spain
		
	}).fadeIn(300).fadeOut(200, function () {
		
		$('#myPic').css({background: 'url("img/max-rounasi-old-1.png") no-repeat'}); // Canada
		
	}).fadeIn(200);
});
*/


$(window).load(function () {
	
	$('#myPic3').css('background', 'none');

	
     $('#myPic').addClass('vanishIn delay1s animated');
	 $('#myPic2').addClass('vanishIn delay1s animated');
	 
     /*setTimeout(function () {$('#myPic').css('background', 'none');}, 2800);  */
	 
	 setTimeout(function () {$('#myPic2').addClass('fadeOut animated');}, 6800); 
	  
	 setTimeout(function () {$('#myPic3').css({background: 'url("img/old-face.png") no-repeat'}).addClass('fadeIn animated');}, 7800);
            
	 
	 /*setTimeout(function () {$('#myPic').css({background: 'url("img/max-rounasi-old-1.png") no-repeat'}).fadeIn('slow');}, 4800);*/
    
	/*$('#intro #myPic').animate({backgroundPosition:"(0 393px)"}, {duration:500})*/
});




/*----------------------------------------------------*/
/* NEW 
/*----------------------------------------------------*/

var animateText = function(object) {
	setTimeout(function() {
		object.find('.cs-text-cut').addClass('active');
	}, 700);
	setTimeout(function() {
		object.find('.row img').addClass('active');
	}, 700);
}


$(window).scroll(function() {   
	$('section').each( function(i){
	    
	    var bottom_of_object = $(this).position().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( $(window).scrollTop() < 2000 ) {
       		$('.lax').css('top', ($(window).scrollTop() * 0.25 )+'px').removeClass('active').addClass('show');
        }
                
        if( bottom_of_window > bottom_of_object && !$(this).find('img').hasClass('active') ){
            
            animateText( $(this) );
            
            if( $('#canvasloader-container').length == 0 ) {
            	$(this).append('<div id="canvasloader-container"></div>');
            	loader();
            }
            
            $(this).find('img').each( function(i) {
            	$(this).attr( 'src', $(this).attr('image') );
        		$(this).load(function () {  
        			$(this).addClass('active');
        			setTimeout(function() {
        				$('#canvasloader-container').remove();
        			}, 700);
        		});
            });
        }
    }); 
});

