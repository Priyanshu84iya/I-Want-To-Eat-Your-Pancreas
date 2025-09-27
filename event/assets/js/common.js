var winw = $(window).width();
var winh = $(window).height();
var sct, $this;

$(function(){
	$('.wrapper').addClass('load');
	$('.pagetop').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 800, 'swing');
	});

	setInterval(function(){
		$this = $('.foot_img_now');
		if($this.next().length == 0){
			$('.foot_img ul li').eq(0).addClass('foot_img_now');
		}else{
			$this.next().addClass('foot_img_now');
		}
		$this.removeClass('foot_img_now');
	}, 6000);

	$('[data-page]').on('click', function(){
		var href = $(this).attr('href');
		$('.wrapper').removeClass('load');
		setTimeout(function(){
			location.href = href;
		}, 800);
		return false;
	});

});

$(window).on('load scroll', function(){
	sct = $(window).scrollTop();
	$('.back01').css({'transform': 'translateY('+sct/4+'px)'});
	$('.back02').css({'transform': 'translateY('+sct/8+'px)'});
});

