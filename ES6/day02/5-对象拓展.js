
let name = 'zhangsan';
let age = 21;
let gender = '男';

// let {name,age,gender} = {};

//对象中的属性值及方法简写
let obj = {
	name,
	age,
	gender,
	// sayName:function(){}
	// sayName(){}
	sayName:()=>{}
};

console.log(obj)

/*let obj = {
	name:name,
	age:age,
	gender:gender,
	sayName:function(){}
};*/

let obj2 = {
	name,
	age,
	gender,
	sayHi(){
		console.log('Hi');
	}
};

obj2.sayHi();
// 属性名可以用表达式【将变量作为对象属性名来使用使用[]括号】
//给对象中添加十个属性
let obj3 = {};
for(let i=0;i<11;i++){
	obj3['name'+i] = i;
}
// console.log(i);
console.log(obj3);

let obj4 = {
	['name'+name]:'hello'
};
console.log(obj4);	//{namezhangsan:'hello'}

//用上面的name变量的值作为属性名
let obj5 = {
	[name]:'hello'
};
console.log(obj5);	//{zhangsan:'hello'}

//函数方法的name属性【该函数的名称【string类型】】
console.log(obj2.sayHi.name);  //sayHi

function test(){};
console.log((function test(){}).name);  //test
console.log(test.name);  //test

console.log(typeof (function(){}).name,'---');  //立即执行函数name属性为空字符串







