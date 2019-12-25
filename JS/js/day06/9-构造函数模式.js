//构造函数模式
//自定义构造函数
function sayName(){
	console.log(this.name);
}
function Person(name,age,gender){
	//new Object()
	//this指向new关键字创造的新实例
	this.name = name;
	this.age = age;
	this.gender = gender;
	//return o;
}

var p1 = new Person('zhangsan',18,'男');
console.log(p1.constructor);
console.log(p1);


function Dog(name,age,color){
	this.name = name;
	this.age = age;
	this.color = color;
	this.sayName = sayName;
}

var d1 = new Dog('一休',10,'金黄色');
console.log(d1.constructor);
console.log(d1);




