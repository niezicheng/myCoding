//普通函数
function test(){
	console.log(this);
}
// test();	 //global window

/*console.log(this);  //module.exports {}
console.log(this === module.exports);  //true*/

let test2 = ()=>{
	//箭头函数内部没有this，this指向箭头函数【声明时】的父作用域中的this
	console.log(this);
};
test2();  //{}

let obj = {
	test,
	test2
};

obj.test();	//obj
obj.test2(); //{}

//箭头函数内部的arguments不再保留实参
let test3 = ()=>{
	console.log(arguments);
};
test3();