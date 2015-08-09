$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active').fadeIn('slow');

		$("#"+tab_id).addClass('active').fadeIn('slow');
	})

})