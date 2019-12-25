//在函数内部使用var修饰的变量是局部变量。局部变量在函数外部是访问不了的

//在函数内部可以访问外部的全局变量，在函数外部不可以访问内部的局部变量
var a = 1;
function test(){
	console.log(a); //1
	var b = 2;
	console.log(b); //2
}
test();
console.log(a);  //1
//console.log(b);  //b is not difined

var g = 100;
function testG(){
	//自身有该变量就不使用全局变量
	console.log(g); //undefined
	var g = 200;
	console.log(g); //200
}
testG();
console.log(g); //100



