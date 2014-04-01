//Animation
var windowResize = function() {
	var width = $(window).width();
	var menuw = width / 3;
	$('header').find('a').css('width', menuw+'px');
}

$(document).ready(function() {
	$(window).bind('resize', windowResize);
	windowResize();
	$(window).bind('scroll', showStuff);
	
	
	
	// Animations
	$('aside').addClass('fold').removeClass('unfold');
	$('article.active').find('img').addClass('active');
	animateText( $('article.active') );
	$('aside a.social').mouseenter(function(){
		$(this).addClass('ani');
	}).mouseleave(function() {
		$(this).removeClass('ani');
	});
	
});

var animateText = function(object) {
	object.find('#works h1').addClass('active');
	setTimeout(function() {
		object.find('h3').addClass('active');
	}, 50);
	setTimeout(function() {
		object.find('p').addClass('active');
	}, 100);
}

// Loader
var loader = function() {
	var cl = new CanvasLoader('canvasloader-container');
	cl.setColor('#2D7DDC'); // default is '#000000'
	cl.setShape('spiral'); // default is 'oval'
	cl.setDiameter(88); // default is 40
	cl.setDensity(30); // default is 40
	cl.setSpeed(1); // default is 2
	cl.setFPS(60); // default is 24
	cl.show(); // Hidden by default
	
	// This bit is only for positioning - not necessary
	  var loaderObj = document.getElementById("canvasLoader");
		loaderObj.style.position = "absolute";
		loaderObj.style["top"] = cl.getDiameter() * -0.5 + "px";
		loaderObj.style["left"] = cl.getDiameter() * -0.5 + "px";
}

$(window).scroll(function() {   
	$('article').each( function(i){
	    
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