$(document).ready(function(){
			//mobile menu
			$('#main-menu').slicknav({
				prependTo: '#attach-mobile-menu',
				label: ''
			});
			//counting down	
			$('.timer').countTo();
			//viewport
			$('*[data-animate]').addClass('hide').each(function(){
				$(this).viewportChecker({
					classToAdd: 'show animated ' + $(this).data('animate'),
					classToRemove: 'hide',
					offset: 200
				});
			});
			    				
		});
		$('#main-container').imagesLoaded(function(){
			//slider
			$('#main-slider').bxSlider({
				mode: 'fade',
				auto: true,
				controls: false,
				pager: false,
				speed: 500
			});
			//opinions slider
			$('#opinions-slider').bxSlider({
				mode: 'vertical',
				auto: true,
				controls: false,
				pager: false,
				speed: 1000
			});	
			//owl-carousel
			var owl = $('#portfolio-carousel');
			owl.owlCarousel({								
				loop: true,			    
			    autoplay: true,
			    autoplayTimeout: 3000,
			    autoplayHoverPause: true,
			    margin: 10,			   
    			responsiveClass: true,
    			responsive:{
        			0: {
           			 	items: 1,          
        			},
        			768: {
            			items: 2,           
        			},
        			992: {
            			items: 3, 
                   		}
    			}
			});
		});