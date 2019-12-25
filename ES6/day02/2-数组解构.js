//数组解构
// let [a,b,c] = [1,2,3,4,5];
// console.log(a,b,c); 	//1 2 3

//保存数组剩余的值，使用扩展运算符...
let [a,b,c,...d] = [1,2,3,4,5,6,7];
console.log(a,b,c,d); 	//1 2 3 [4,5,6,7]

//扩展运算符可以将数据展开【不要单独使用扩展运算符展开数组，可以在参数数组中使用，将参数数组转换为参数列表,如果扩展运算后面是变量，那么接受多余的数据放置数组中】
let result1 =  Math.max(2,5,8,23,75);
console.log(result1);

let result2 =  Math.max.apply(null,[2,5,8,23,75]);
console.log(result2);	//75

let result3 =  Math.max(...[1,2,3,4,5,6,7]);
console.log(result3);	//7

//rest参数【扩展运算符形式接受的参数】 ------>不在推荐使用arguments

//累加
/*function test(...tail){
	//获取所有的实参，然后累加
	tail = [1,2,3,4,5]
}

test(1,2,3,4,5);*/

/*function test(a,...tail){
	//获取所有的实参，然后累加
	tail = [2,3,4,5]
}

test(1,2,3,4,5);*/

function test([a,...tail]){
	//获取所有的实参，然后累加
	tail = [2,3,4,5]
}

test([1,2,3,4,5]);

// 默认值的解释
{
	//解构完成后严格匹配到undefined时，默认值生效
	let [a=1,b] = [undefined];
	console.log(a,b,'-----');
	let [c=1,d] = [3,4];
	console.log(c,d,'-----'); //3 4


console.log('---------------------------------------------------------');
	//默认值赋值的时机【先解构如果值严格匹配undefined，则再去进行默认值的赋值】
	function test(){
		console.log('test');
		return 2;
	}
	// let [g=test] = [1]; 
	// console.log(g);  //1
	// let [g=test()] = [undefined];  
	let [g=test()] = [1];  
	console.log(g);  //1   【解构值不为undefined，不进行默认值的赋值；即 test()函数不会执行】
}

