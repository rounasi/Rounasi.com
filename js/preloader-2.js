/* --------------------------------------------- */
/* Preloader */
/* --------------------------------------------- */

(function($) {
				
	var preloader, progress, txt, percent = 0, win, winWidth;
	
	$(document).ready(function() {
		
		if(typeof WebFont !== 'undefined') {
			
			WebFont.load({google: {families: ['Oswald::latin']}, active: init});
			
		}
		else {
		
			init();
			
		}
		
	});
	
	function init() {
		
		win = $(window);
		winWidth = win.width();
		
		preloader = $('#cj-preloader');
		if(!preloader.length) return;
		
		progress = preloader.children('div');
		
		if(progress.length) {
			
			win.on('resize', resized);
			txt = progress.children('span');
			if(!txt.length) txt = null;
				
		}
		else {
		
			progress = null;
			
		}
		
		$.cjPreloader({
			
			list: $('*[data-cj-preload]'), 
			
			onUpdate: updatePreloader
			
		});
		
	}
	
	function resized() {
		
		winWidth = win.width();
		progress.css('width', winWidth * (percent * 0.01));
		
	}
	
	function updatePreloader(perc) {
		
		if(progress) progress.css('width', winWidth * (perc * 0.01));
		
		if(txt) txt.text(perc);
		
		if(perc === 100) {
			
			setTimeout(function() {
				
				preloader.addClass('cj-hide-preloader');
				
				win.off('resize', resized);
				win = preloader = progress = txt = null;
				
			}, 10);
			
		}
		
		percent = perc;
		
	}
	
})(jQuery);


