$(window).on('load',function(){
  var mr = 25;
  if($(window).width() < 768){
    mr = 6;
  }
  var $grid = $('#tw_content').imagesLoaded(function(){
    $grid.masonry({
      itemSelector: '.tw_item',
      fitWidth: false,
      // columnWidth: 310,
      transitionDuration: '0.2s',
      gutter: mr
    });
  });

  var paramMaxID = 0;
  var paramCount = 10;
  var paramUrl = "./tweet.json.html";
  var $container;
  var $html;

  $.ajax({
    url: paramUrl,
    type: "POST",
    data: { maxId: paramMaxID, count: paramCount },
    dataType: "json",
  }).done(function(res) {
    if (res != '') {
      paramMaxID = res.nextMaxId;
      var json = res.list;
      if (json.length == 0) {
        $('#more_btn').css('display', 'none');
      } else {
        for (var i = 0; i < json.length; i++) {
          // class random setting

          $html = '';
          $html += '<li class="tw_item new_item" style="opacity: 0;"><div class="tw_item_content">';
          if(json[i]['photo'].url != 'false'){
            $html += '<p class="tw_img"><img src="' + json[i]['photo'].url + '" alt=""></p>';
          }
          $html += '<p class="tw_name">@'+json[i]['user'].name+'</p>';
          $html += '<p class="tw_day">'+json[i].created_at+'</p>';
          $html += '<p class="tw_txt">'+json[i].message+'</p>';
          $html += '</div></li>';

          $grid.append($html);
          $grid.imagesLoaded(function(){
            $grid.masonry('appended', $html);
            $grid.masonry('reloadItems');
            $grid.masonry('layout');
          });
        }
        $('.tw_content .new_item').delay(200).animate({opacity: 1},200).removeClass('new_item');

        if(json.length < paramCount){
        	$('#more_btn').hide();
        }
      }
    }
  }).fail(function(res){
    console.log("some error occured.");
  });

  // Add MoreInfo
  $('#more_btn').on('click', function() {
    $.ajax({
      url: paramUrl,
      type: "POST",
      data: { maxId: paramMaxID, count: paramCount },
      dataType: "json",
    }).done(function(res) {
      if (res != '') {
        paramMaxID = res.nextMaxId;
        var json = res.list;

        if (json.length == 0) {
          $('#more_btn').css('display', 'none');
        } else {
          for (var i = 0; i < json.length; i++) {
            // class random setting
            $html = '';
            $html += '<li class="tw_item new_item" style="opacity: 0;"><div class="tw_item_content">';
            if(json[i]['photo'].url != 'false'){
              $html += '<p class="tw_img"><img src="' + json[i]['photo'].url + '" alt=""></p>';
            }
            $html += '<p class="tw_name">@'+json[i]['user'].name+'</p>';
            $html += '<p class="tw_day">'+json[i].created_at+'</p>';
            $html += '<p class="tw_txt">'+json[i].message+'</p>';
            $html += '</div></li>';
            $grid.append($html);
            $grid.imagesLoaded(function(){
              $grid.masonry('appended', $html);
              $grid.masonry('reloadItems');
              $grid.masonry('layout');
            });
          }
        }
        $('.tw_content .new_item').delay(200).animate({opacity: 1},200).removeClass('new_item');
      }

    }).fail(function(res){
      console.log("some error occured.");
    });
  })

});