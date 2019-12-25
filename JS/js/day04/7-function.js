//函数声明
function test(){
	//函数体
	console.log('test');
	//return 后面的语句不会再执行
	return 1;  //函数返回值
}
var result = test(); //result = 1;
console.log('函数返回值：'+result);  //1
console.log(test);
test(); //test

//函数表达式声明  匿名函数：function(){}
var test1 = function(){
	console.log('test1');
}
console.log(test1);
test1(); //test1

//匿名函数的使用  立即执行函数【IIFE】
(function(){
 console.log('我是立即执行函数。');
})()





