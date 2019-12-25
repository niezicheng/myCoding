class Animal{
	static staticAttr = "Animal的静态属性";
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	sayName(){
		console.log('Animal中的sayName方法');
	}
	static say(){
		console.log('Animal中的say方法');
	}


}
// Animal.staticAttr = "Animal的静态属性";
class Dog extends Animal{
	constructor(name,age,color){
		super(name,age);
		this.color = color;
	}

	static fun1(){
		super.say();
		console.log(super.staticAttr);
	}
	fun2(){
		// super.say();
		// console.log(super.staticAttr);
	}

}

let dog = new Dog('旺财',2,'yellow');
// console.log(dog);
Dog.fun1();
dog.fun2();
