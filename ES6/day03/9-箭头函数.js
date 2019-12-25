function test(){
	console.log(this);
	(()=>{
		console.log(this);
	})();
}

test(); //global global

/*let obj = {
	name:'zhangsan',
	test
};
obj.test();  //obj obj
*/

//箭头函数内部没有this，this指向箭头函数【声明时】的父作用域中的this
function test(){
	console.log(this);
	return ()=>{
		console.log(this);
	};   //箭头函数声明在这里
}

let obj = {
	name:'zhangsan',
	test:test()   //这里会先执行test()函数，然后再将test()函数返回的箭头函数赋值给obj的test属性，箭头函数已经在test()函数中已经声明了
};
