//arguments存放的是实参列表，类数组对象，length属性代表存放的实参个数，callee属性代表函数
//累加
function add(a,b){
	console.log(arguments);
	var total = 0;
	for(var i=0;i<arguments.length;i++){
		//console.log(arguments[i]);
		total += arguments[i];
	}
	return total;
}
var result = add(1,2,34,12,155,22,4);
console.log(result);  //3


//递归阶乘

function mul(num){
	//console.log(arguments.callee); //函数在自身函数内部调用自身使用arguments.callee代替函数名
	if(num>1){
		return num*arguments.callee(num-1);
	}else{
		return 1;
	}
}

var result = mul(5);
console.log(result);


