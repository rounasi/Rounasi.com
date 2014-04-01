//Countdown
function serverTime() {
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

//sliders autoplay
	//intro slider
	$('#carousel_fade_intro').carousel({
		interval: 2500,
		pause: "false"
	})
	//works sliders
	$('#carousel_horizontal_slide, #carousel_vertical_slide, #carousel_fade_1, #carousel_fade_2').carousel({
		interval: false
	})

//make section height of window
	$(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px'});
		});
	});

//custom scrollbar
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);

//contact form
	$(document).ready(function() {
	var options = {
	target: '.alert',
	beforeSubmit: showRequest,
	success: showResponse
	};
	$('#contactForm').ajaxForm(options);
	});
	function showRequest(formData, jqForm, options) {
	var queryString = $.param(formData);
	return true;
	}
	function showResponse(responseText, statusText)  {
	}
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
			return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
			this.value = '';
		else if (type == 'checkbox' || type == 'radio')
			this.checked = false;
		else if (tag == 'select')
			this.selectedIndex = -1;
		});
	};

//smooth scroll on page
	$(function() {
		$('#more a, .nav a, .nav li a, .brand, #footer li a').bind('click',function(event){
		var $anchor = $(this);

		$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
		});

		$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top -61
		}, 1500,'easeInOutExpo');

		event.preventDefault();
		});
	});

//gallery image hover tooltip trigger
	$("[data-thumb=tooltip]").tooltip();

//collapse menu on click on mobile and tablet devices
	$('.nav a').click(function () { $(".nav-collapse").collapse("hide") });
	

//Ajax Loader Images
		$(function(){
						
$(".oneDrop_1").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':1000,'image':'ajax-loader.gif','selector': '.oneDrop_1','zIndex':99,'order': 1,});

$(".keno_iPad").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':2000,'image':'ajax-loader.gif','selector': '.keno_iPad','zIndex':99,'order': 2,});

$(".baccarat_iPhone").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':3000,'image':'ajax-loader.gif','selector': '.baccarat_iPhone','zIndex':99,'order': 3,});

$(".share_Game").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':4000,'image':'ajax-loader.gif','selector': '.share_Game','zIndex':99,'order': 4,});

$(".fringilla").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':5000,'image':'ajax-loader.gif','selector': '.fringilla','zIndex':99,'order': 5,});

$(".rubyTigers").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':6000,'image':'ajax-loader.gif','selector': '.rubyTigers','zIndex':99,'order': 6,});

$(".hOTSPUR88").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':7000,'image':'ajax-loader.gif','selector': '.hOTSPUR88','zIndex':99,'order': 7,});

$(".black_Swan").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':8000,'image':'ajax-loader.gif','selector': '.black_Swan','zIndex':99,'order': 8,});
				
$(".gold_Deluxe").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':9000,'image':'ajax-loader.gif','selector': '.gold_Deluxe','zIndex':99,'order': 9,});

$(".clean_Day").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':10000,'image':'ajax-loader.gif','selector': '.clean_Day','zIndex':99,'order': 10,});

$(".Deni_Castle").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':11000,'image':'ajax-loader.gif','selector': '.Deni_Castle','zIndex':99,'order': 11,});

$(".phoenix_Games").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':12000,'image':'ajax-loader.gif','selector': '.phoenix_Games','zIndex':99,'order': 12,});

$(".aPA_Home").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':13000,'image':'ajax-loader.gif','selector': '.aPA_Home','zIndex':99,'order': 13,});		

$(".aPA_Home").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':13000,'image':'ajax-loader.gif','selector': '.aPA_Home','zIndex':99,'order': 13,});	

$(".aPA_Home").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':13000,'image':'ajax-loader.gif','selector': '.aPA_Home','zIndex':99,'order': 13,});	

$(".pk_Games").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':14000,'image':'ajax-loader.gif','selector': '.pk_Games','zIndex':99,'order': 14,});	

$(".ameego_App").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':15000,'image':'ajax-loader.gif','selector': '.ameego_App','zIndex':99,'order': 15,});	

$(".euro_2012").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':16000,'image':'ajax-loader.gif','selector': '.euro_2012','zIndex':99,'order': 16,});	

$(".game_Lobby").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':17000,'image':'ajax-loader.gif','selector': '.game_Lobby','zIndex':99,'order': 17,});	

$(".live_Hair").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':18000,'image':'ajax-loader.gif','selector': '.live_Hair','zIndex':99,'order': 18,});	

$(".velvetPuffin").simpleAjaxImageLoader({'ajaxLocation':'ajax.html','background':'#3a3a3a','downloadSpeedSim':19000,'image':'ajax-loader.gif','selector': '.velvetPuffin','zIndex':99,'order': 19,});




		});
	