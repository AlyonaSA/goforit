$("a").on('click', function () {
        $(".tab").hide();
        $($(this).attr("href")).show();
   });




$('input').siblings('span').hide();
$(function() {
	$('input').on('mouseenter', function() {
		$(this).siblings('span').fadeIn();
	});
	$('input').on('mouseleave', function() {
		$(this).siblings('span').fadeOut();
	});
	$('.btnHelp').on('click', function(){
   		$('.help').show('fast');
   });
});
