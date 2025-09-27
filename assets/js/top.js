var winw = $(window).width();
var winh = $(window).height();
var sct;

if(location.search){
	var que = location.search;
}

$(function(){
	$('li[data-scroll] a').on('click', function(){
		var target = $('#'+$(this).parent().attr('data-scroll'));
		if (!target.length) return;
		var targetY = target.offset().top - 128;
		$('html,body').animate({scrollTop: targetY}, 600, 'swing');
		return false;
	});

	$('[data-movie]').on('click', function(){
		var datacl = $(this).attr('data-movie');
		var st = $(window).scrollTop();
		$('.modal_wrap').append('<iframe width="900" height="506" src="https://www.youtube.com/embed/'+datacl+'?rel=0&autoplay=1" frameborder="0"></iframe>');
		$('.modal_back').stop().fadeIn(400);
		$('.modal_in').addClass('modal_movie').css({top:st+100+'px'}).stop().delay(150).fadeIn(400);
		return false;
	});
	$('[data-modal-movie]').on('click', function(){
		var datacl = $(this).attr('data-modal-movie');
		var st = $(window).scrollTop();
		$('.modal_movie_tr .now_movie div').append('<iframe width="900" height="506" src="https://www.youtube.com/embed/'+datacl+'?rel=0&autoplay=1" frameborder="0"></iframe>');
		$('.modal_back').stop().fadeIn(400);
		$('.modal_movie_tr').show();
		$('.modal_movie_tr').find('.trailer_now').removeClass('trailer_now');
		$('.modal_movie_tr [data-trailer="'+datacl+'"]').addClass('trailer_now');
		$('.modal_in').addClass('modal_movie').css({top:st+100+'px'}).stop().delay(150).fadeIn(400);
	});
	$('[data-comment]').on('click', function(){
		var datacl = $(this).attr('data-comment');
		var st = $(window).scrollTop();
		$('.modal_back').stop().fadeIn(400);
		$('.modal_comment_in').hide();
		$('.modal_comment').show();
		$('#'+datacl).show();
		$('.modal_in').css({top:st+150+'px'}).stop().delay(150).fadeIn(400);
		return false;
	});
	$('.modal_back, .modal_close').on('click', function(){
		$('.modal_back').stop().fadeOut(400);
		$('.modal_in').stop().fadeOut(400, function(){
			$('.modal_wrap').children().remove();
			$('.modal_comment, .modal_movie_tr, .modal_event').hide();
			$('.modal_movie_tr iframe').remove();
			$(this).removeClass('modal_movie');
		});
	});

	$('[data-trailer]').on('click', function(){
		var $this = $(this);
		if(!$this.attr('class') || $this.attr('class') == ''){
			$this.parent().prev('.now_movie').find('iframe').remove();
			var dataid = $(this).attr('data-trailer');
			$this.parent().find('.trailer_now').removeClass('trailer_now');
			$this.addClass('trailer_now');
			$this.parent().prev('.now_movie').find('div').append('<iframe width="900" height="506" src="https://www.youtube.com/embed/'+dataid+'?rel=0&autoplay=1" frameborder="0"></iframe>');
		}
	});
	sct = $(window).scrollTop();
	$('.top_img').css({'top': '-'+(winw/16*22-winh)/4 +'px'});
	$('.top_img').css({'transform': 'translateY(-'+sct/1.25+'px)'});

	setInterval(function(){
		$this = $('.story_img_now');
		if($this.next().length == 0){
			$('.story_img ul li').eq(0).addClass('story_img_now');
		}else{
			$this.next().addClass('story_img_now');
		}
		$this.removeClass('story_img_now');
	}, 6000);
});

$(window).on('load', function(){
	if(que){
		que = que.replace('?','#');
		$('.loading').fadeOut(800);
		var targetY = $(que).offset().top - 118;
		$('html,body').animate({scrollTop: targetY}, 200, 'swing');
	}else{
		$('.loading').addClass('load').delay(3500).fadeOut(1000);
		// setTimeout(function(){
		// 	$('.btn_movie').trigger('click');
		// }, 4000);
	}
});


$(window).on('load resize', function(){
	winw = $(window).width();
	winh = $(window).height();
	$('.top_img').css({'top': '-'+(winw/16*22-winh)/4 +'px'});
});

var ste;
var array = [];
$('section[data-scroll]').each(function(i){
	array.push($(this).attr('id'));
});

function nav_change(){
	ste = $(window).scrollTop();
	for(i=0; i<array.length; i++){
		if(array.length-2 >= i){
			if($('#'+array[i]).offset().top-200 <= ste && $('#'+array[i+1]).offset().top-200 > ste){
				$('.page_now').removeClass('page_now');
				$('.nav li[data-scroll='+array[i]+']').addClass('page_now');
				break;
			}else{
				$('.page_now').removeClass('page_now');
			}
		}else{
			if($('#'+array[i]).offset().top-200 <= ste){
				$('.page_now').removeClass('page_now');
				$('.nav li[data-scroll='+array[i]+']').addClass('page_now');
				break;
			}
		}
	}
}

$(window).on('load scroll', function(){
	sct = $(window).scrollTop();
	if(winh > sct){
		$('.top_img').css({'transform': 'translateY(-'+sct/1.7+'px)'});
		$('.share').addClass('top_share');
	}else{
		$('.share').removeClass('top_share');
	}
	$('.sc_anm').each(function(){
		var elemPos = $(this).offset().top;
		if (sct > elemPos - winh/1.3){
			$(this).addClass('sc_anm_in');
		}
	});
	nav_change();
});