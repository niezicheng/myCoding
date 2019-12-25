function test(a,b){
	console.log('test');
	return 'hello';
}
console.log(test.length);  //2  形参的个数
//test();
//打印函数运行后的返回值,没有返回值则为undefined
console.log(test()); // 调用test()函数并输出其返回结果 hello


//函数作为参数和函数作为返回值

//函数作为参数
function handle(fun){
	var msg = 'hello';
	fun(msg);
}

handle(function(m){
	console.log(m);
}); //hello


//函数作为返回值
function handle2(){
	return function(){
		console.log('123');
	};
}

handle2();  //handle()函数返回的值：function的函数
handle2()(); //123




