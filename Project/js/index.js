//主js
//点击左侧导航右侧出现对应内容
$(function(){
	$('.info-content').load('./pages/home.html');
	$('.info-left li').click(function(){
		var title = $(this).text().trim();
		// console.log(title);
		switch (title) {
			case '首页':
				$('.info-content').load('./pages/home.html');
				break;
			case '栏目管理':
				$('.info-content').load('./pages/categroy.html');
				break;
			case '资讯管理':
				$('.info-content').load('./pages/info.html');
				break;
			case '用户管理':
				$('.info-content').load('./pages/user.html');
				break;
			default:
				break;
		}
	});

});