//工厂模式批量创建对象
var obj = {
	name:'zhangsan',
	age:12,
	gender:'男'
};
var obj2 = {
 name:'lili',
 age:18,
 gender:'女'
};


functio sayName(){
 	 console.log(this.name);
}


function createObject(name,age,gender){
	var obj = {
		name:name,
		age:age,
		gender:gender,
		sayName:sayName
	};
	return obj;
}

var o1 = createObject('zhangsan',12,'男');
var o2 = createObject('lili',18,'女');
var dog = createObject('一休',16,'雄');

console.log(o1,o2,dog);
//通过实例找构造函数  实际上调用原型对象的constructor属性
console.log(o1.constructor);  //Object
//方法定义在全局当中不能够更好的体现对象的封装性
console.log(o1.sayName === o2.sayName); //true  





