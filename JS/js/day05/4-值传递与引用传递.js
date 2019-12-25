//值传递与引用传递
//值传递与址传递
var a = 1;
var b = a;
console.log(a,b);  //1 1
b = 3;
console.log(a,b);  //1 3


var obj = {
	name:'zhangsan',
	age:21
};
var obj2 = obj;
console.log(obj,obj2); //{name:'zhangsna',age:21}
obj2.gender = '男';
console.log(obj,obj2);   //{name:'zhangsan',age:21,gender:'男'}




