//this指向当前函数的作用域
function test(){
 //console.log(this);  //global全局对象,在node.js环境中
 //如果测试环境是浏览器，指向的是window对象
}
test();

var obj = {
	name:'zhangsan',
	age:21,
	sayName:function(){
		console.log(this.name);
	}
};

obj.sayName();




