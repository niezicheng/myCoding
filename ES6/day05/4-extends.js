//父类
class Animal{
	constructor(name,age){
		this.name = name;
		this.age = age;
		//this如果是在子类构造器中调用的父类构造器中的this指向的是子类的实例对象
		// console.log(this);
	}
	sayName(){
		console.log('Animal中的实例方法',this.name);
	}

	static animalSay(){
		console.log('Animal中的静态方法')
	}
}

Animal.animalAttr = 'Animal中的静态属性';

//继承
class Dog extends Animal{
	constructor(name,age,color){	
		super(name,age);	//在子类构造器中调用父类构造器
		//在super()底下用this
		this.color = color;
	}


}

let dog = new Dog('旺财',1,'yellow');
console.log(dog);
//原型继承
dog.sayName();
//类继承
Dog.animalSay();
console.log(Dog.animalAttr);

//子类继承父类【静态的属性及方法的继承】
console.log(Dog.__proto__ === Animal);

//子类的原型对象继承自父类的原型对象【实例的属性及方法的继承】
console.log(Dog.prototype.__proto__ === Animal.prototype);