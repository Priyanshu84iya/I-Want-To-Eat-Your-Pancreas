jQuery.extend( jQuery.easing,{
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }
});
$(window).on('load',function(){
    $('.wrapper').fadeIn('easeOutQuart');
});

$(function(){
	$('.pagetop').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 800, 'swing');
	});

	var slide_ul = $('.bg_head');
	var slide_li = slide_ul.find("div");
	slide_li.clone().appendTo(slide_ul).clone().appendTo(slide_ul);

	var winh = $(window).height();
	$(window).on('scroll load', function(){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			if (scroll > elemPos - winh/1.5){
				$(this).addClass('fadein_in');
			}
		});
	});
});


var elements = [
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f1N1gXgdzHv%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f2a5krhGSat%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f3zk3J3edMx%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f4bxG0aNthI%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f5WvJhKCfXp%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f6slyTo8MXZ%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f7fSdPzM2YF%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f8wjhx5Y4Xy%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f9cB8Xiq7oL%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f10lPJl0ipM%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f11InK9GKTg%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>',
  '<a href="http://twitter.com/share?url=https%3a%2f%2fkimisui%2danime%2ecom%2fcp%2freview%2f12zHgThfnb%2ehtml&hashtags=%e3%82%ad%e3%83%9f%e3%82%b9%e3%82%a4%e6%84%9f%e6%83%b3" target="_blank"><img src="assets/img/btn_tweet.png" alt="ツイートする"></a>'
];
var randElm = elements[Math.floor(Math.random() * elements.length)];
$('.btn_kanso').html(randElm);