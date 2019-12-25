//更改this的指向，执行函数
function test(a,b){
	console.log (this,a,b);
}

test();  //global对象 undefined undefined
test(1,2) ///global对象 1 2

var obj = {
	name:'zhangsan',
};

//更改test内部的this指向为obj
test.call(obj,3,4); //obj 3 4
test.apply(obj,[3,4]);  //obj 3 4
console.log('-------------------------');
test.bind(obj); //不执行test，只更改this指向

test.bind(obj)(5,6);   //更改函数内this的指向并传递参数执行
test.bind(obj,7,8)();   //obj 7 8






