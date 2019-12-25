//Animal类
class Animal{
	//构造器
	constructor(name,age){
		//this-->构建的类的实例
		this.name = name;
		this.age = age;
	}
	//实例方法
	sayName(){
		console.log('sayName',this.name)
	}
	//静态方法
	static say(){
		console.log('静态方法');
	}

}

//静态属性
Animal.staticAttr = '静态属性';

let animal = new Animal('旺财',1);
console.log(animal);
console.log(animal.name);
console.log(animal.age);
//调用实例方法sayName()
animal.sayName();

//静态方法的调用
Animal.say();
//静态属性的使用
console.log(Animal.staticAttr);
