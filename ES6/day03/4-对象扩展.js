//Object.assign()   对象的浅复制，对象的合并
let obj = {
	name:'zhangsan',
	friends:[1,2,3],
	sayName:function(){}
};

//let obj2 = obj;
let obj2 = Object.assign(obj);
console.log(obj === obj2);  //true
obj2.name = 'nzc';

//对象的合并
let obj3 = Object.assign({},obj);

console.log(obj3 === obj); //false
console.log(obj3.sayName === obj.sayName); //true
console.log(obj3.firends === obj.firends); //true

let obj4 = {};
Object.assign(obj4,obj,obj2);
console.log(obj4);