$(function(){
	// 阻止背景广告title
	var oldtitle;
	var $title=$('.login-wrap');
	$('.login-box').mouseover(function(){
		oldtitle=$title.attr('title');
		$title.attr('title','');
	}).mouseout(function(){
		$title.attr('title',oldtitle);
	});

});