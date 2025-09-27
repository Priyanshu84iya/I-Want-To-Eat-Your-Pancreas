var winw = $(window).width();
var winh = $(window).height();
var sct;

$(function(){
	$('li[data-sc]').on('click', function(){
		var target = $('div[data-sc='+$(this).attr('data-sc')+']');
		if (!target.length) return;
		var targetY = target.offset().top - 158;
		$('html,body').animate({scrollTop: targetY}, 600, 'swing');
		return false;
	});

});
