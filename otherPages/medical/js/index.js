
$(function(){
	var flag = true;
	// 为item类元素中的input绑定聚焦事件
	$('.item input').focus(function(e){
		// console.log(this,e.target);
		if ($(this).attr('name') === 'username' ) {
			var item = $('.item').has('input[name=username]');
			// console.log(item);
			$(item).css({
				borderColor:'#43CFC0'
			});
			$('label[for=username] img').replaceWith('<img src="./images/User-2.png">');

			//设置下面密码框为失焦状态样式
			var item = $('.item').has('input[name=password]');
			$(item).css({
				borderColor:'#ccc'
			});
			$('label[for=password] img').replaceWith('<img src="./images/password-1.png">');
		}
		//密码框聚焦
		if ($(this).attr('name') === 'password') {
			//设置眼睛为显示状态
			$('.myEye').css({
				display:'block'
			});
			var item = $('.item').has('input[name=password]');
			$(item).css({
				borderColor:'#43CFC0'
			});
			$('label[for=password] img').replaceWith('<img src="./images/password-2.png">');
			//开始聚焦是密码框应为password类型
			if($(this).attr('type') === 'text'){
				$(this).attr('type','password');
				//修改眼睛图片
				$('.myEye>img').replaceWith('<img src="./images/md-eye-off.png" alt="">');
			}
		}
	});

	//鼠标移入眼睛图片时设置标志变量为false【支持子元素】
	$('.myEye').mouseover(function(){
		flag = false;
	})
	$('.myEye').mouseout(function(){
		flag = true;
	});

	// 为item类元素中的input绑定失焦事件
	$('.item input').blur(function(e){
		// console.log(this,e.target);
		if ($(this).attr('name') === 'username') {
			var item = $('.item').has('input[name=username]');
			// console.log(item);
			$(item).css({
				borderColor:'#ccc'
			});
			$('label[for=username] img').replaceWith('<img src="./images/User-1.png">');
		}
		if ($(this).attr('name') === 'password' && flag) {
			//隐藏密码中的眼睛
			$('.myEye').css({
				display:'none'
			});
			var item = $('.item').has('input[name=password]');
			$(item).css({
				borderColor:'#ccc'
			});
			$('label[for=password] img').replaceWith('<img src="./images/password-1.png">');
		}
	});

	//点击眼睛图标显示密码
	$('.item').on('click','.myEye',function(e){
		// console.log(e);
		//获取事件代理目标元素节点
		var delegate = e.delegateTarget;
		// console.log(delegate)
		// 获取myEye前一个兄弟元素输入框
		var input = $(this).prev('input');
		// console.log(input);
		if($(input).attr('type') === 'password'){
			$(input).attr('type','text');
				$('.myEye>img').attr('src','./images/md-eye.png');
				// $('.myEye>img').replaceWith('<img src="./images/md-eye.png" alt="">');
				// flag = true;
		}else{
			$(input).attr('type','password');
			$('.myEye>img').replaceWith('<img src="./images/md-eye-off.png" alt="">');
			// flag = false;
		}
	});


});
