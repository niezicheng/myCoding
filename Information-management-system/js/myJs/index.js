// 首页js
$(function(){
	$('.content-right').load('./pages/home.html');
	// $('.content-right').load('./pages/categroy.html');
	// $('.content-right').load('./pages/info.html');
	// $('.content-right').load('./pages/user.html');
	$('.content-left li').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var title = $(this).text().trim();
		// console.log(title);
		switch (title) {
			case '首页':
				$('.content-right').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.content-right').load('./pages/categroy.html');
				break;
			case '资讯管理':
				$('.content-right').load('./pages/info.html');
				break;
			case '用户管理':
				$('.content-right').load('./pages/user.html');
				break;
			default:
				break;
		}
	});

});