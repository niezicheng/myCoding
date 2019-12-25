//每一个构造函数都有一个原型对象
//实例可以调用对应构造函数中的原型对象的属性和方法
//Object的原型对象
console.log(Object.prototype);
console.log(Object.prototype.constructor === Object); //Object
var obj = {
	name:'zhangsan',
};
console.log(obj.toString()+'\tobj.toString()类型：'+(typeof obj.toString()));  //[object Object]
//console.log(typeof obj.valueOf());  //
console.log(obj.toString() === Object.prototype.toString()); //true

console.log('------------------------------------');
console.log(obj.constructor);  //[Function：Object]

//in是否是自身属性或继承属性
console.log('name' in obj);  //true
console.log('toString' in obj);  //true
console.log('aaa' in obj); //false
console.log('--------------------------------------');
//hasOwnProperty()  判断自身属性
console.log(obj.hasOwnProperty('name')); //true
console.log(obj.hasOwnProperty('toString'));  //false

console.log('--------------------------------------');
//是否是自身属性并且是可枚举的   propertyIsEnumerable()
console.log(obj.propertyIsEnumerable('name'));  //true
console.log(obj.propertyIsEnumerable('toString'));  //false

console.log('*********************************************');
//判断Object.prototype是不是obj的原型对象
console.log(Object.prototype.isPrototypeOf(obj));  //true

//获取当前时间对象
var date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toLocaleString());


