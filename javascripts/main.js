$.fn.focusMode = function(){
	$(this).mousemove(function(event){
		var size = 50;
		$('#focusTop').css('height', (event.pageY - (size/2)) + 'px');
		$('#focusBottom').css('margin-top', (event.pageY + (size/2)) + 'px');
		$('.focus').show();
	});	
};

$(document).ready(function(){
	$('.focus').hide();
	$('#focusMode').click(function(){
		$(document).focusMode();
	});
	
	$('#reload').click(function(){
		window.location.reload();
	});
});