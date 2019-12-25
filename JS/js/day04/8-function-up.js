//函数声明提升 会提升到代码的最前面
test();
function test(){
	console.log('test');
}




//函数声明提升和变量声明提升   【变量提升在前面，函数提升在后面】
console.log(a);  //undefined
var a = 1;

console.log(one); //[Function：one]
function one(){
	console.log('one');
}
var one = 123;
console.log(one);  //123
/*
	var one;
	function one(){}
	console.log(one);
	one = 123;
	console.log(one);
*/







