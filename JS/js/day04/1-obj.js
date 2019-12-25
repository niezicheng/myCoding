//使用两种方式创建对象

//使用new 构造函数去创建构造函数的实例
var obj = new Object();
console.log(obj); //{}
//往对象中添加属性和方法
obj.name = 'zhangsan';
obj.age = 21;
obj.sayHi = function(){}
console.log(obj);  //{name:'zhangsan',age:21,sayHi:[Function]}

//使用对象字面量申明对象
var obj2 = {};
console.log(obj2);  //{}
var obj3 = {
	name:'lisi',
	age:20,
	sayHi:function(){
		console.log('sayHi()方法')
	}
};
console.log(obj3);
console.log('*****************************************');
//1.通过.访问对象中的属性和方法
console.log(obj3.name);  //lisi
//如果属性在对象中不存在的话，不报错  返回undefined值
console.log(obj3.gender);  //undefined
console.log(obj3.sayHi);  //[Function]
console.log('----------------------------------------');
obj3.sayHi();  //运行sayHi()函数方法
function test(){}
//这里并没有运行函数只是函数的引用
console.log(test);  //[Function：test]
//函数的运行
test();

