// 后台线程
onmessage = function(e){
	//主线程给后台线程的参数
	var num = e.data;
	var total = 0;
	for(var i=0;i<num;i++){
		total += i;
	}
	postMessage(total);
};