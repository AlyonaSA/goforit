	var Height = document.querySelector('.footer').offsetHeight;
		setHeight = 'padding-bottom:'+Height+'px';
		document.querySelector('.wrapper').setAttribute('style',setHeight);
		setHeight = 'margin-top:-'+Height+'px';
		document.querySelector('.footer').setAttribute('style',setHeight);
		$(document).ready(function(){
			$('.fade').slick({
				dots: true,
				infinite: true,
				speed: 500,
				cssEase: 'linear'
			});
		});
		

		$(function() {
			$('#b1').addClass('active');
			$('.banners li:first-child').addClass('active');
		    $('.active .slidea span:first-child').html('-');
			$('.active div').slideDown(100);
		});
		$(function() {
		    $('.slidea').on('click', function(event) {
		        var element = $(this).attr('href');
		        var $element = element+'';
		        $('.banners .textblock').slideUp(100);
		        $('.slidea span:first-child').html('+');
		        $($element).slideDown(100);
		        $(this).parent('li').addClass('active').siblings().removeClass('active');
		        $('.active .slidea span:first-child').html('-');
		        event.preventDefault();
		    });
		});