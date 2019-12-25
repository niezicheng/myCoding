//闭包  是函数访问上下文中的变量
var arr = [];
for(var i=0;i<5;i++){
	/*
		arr[] = function(){
			console.log(i);
		};
	*/

	arr[i] = (function(num){
		//return num;
		return function(){
			console.log(num);
		};
	})(i);
}
//arr[0] = 100; //[100]
//arr[1] = 200; //[100,200]

arr[0](); //0
arr[1](); //1
arr[2](); //2

