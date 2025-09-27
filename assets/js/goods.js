$(function(){
	$(".goodslist").find(".thumb").click(function(){
		var img = $(this).attr("goods-id");

		var src = '/assets/img/in/goods/'+ img +'.jpg';

		$("#floatContents .contents").find("img").attr("src",src);

		$("#floatContents").show().velocity({opacity:1},400);
		$("#floatContents figure").show().velocity({opacity:1},400)
	})

      
      
      
	$("#floatContents").find(".wrap").click(function(){
		$("#floatContents").velocity({opacity:0},{
			duration:200,
			complete:function(){
				$("#floatContents .contents").find("img").removeAttr("src");
				$(this).hide();
			}
		})
	})
})