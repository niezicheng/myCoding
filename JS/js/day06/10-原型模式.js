function Person(){
	Person.prototype.name = 'zhangsan';
	Person.prototype.friends = [];
	Person.prototype.sayName = function(){
		console.log(this.name);
	}
}

var p1 = new Person();
console.log(p1.name);  //zhangsan
var p2 = new Person();
console.log(p2.name);  //zhangsan
p1.friends.push('terry');
console.log(p2.friends); //['terry']

console.log(p1.sayName === p2.sayName); //true







