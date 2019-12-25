//每个实例自有的放到构造函数中，实例共享的放到原型对象中
function Person(name,age,gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.friends = [];

	console.log('--------------');
}

Person.prototype = {
	constructor:Person,
	sayName:function(){
		console.log(this.name);
	}
};

var p1 = new Person('zhangsan',21,'男');
var p2 = new Person('lili',18,'女');

console.log(p1);
console.log(p1.constructor);  

p1.friends.push('terry');
console.log(p1.friends);  //['terry']
console.log(p2.friends); //[]


console.log(Person('zhangsan')); //undefined




