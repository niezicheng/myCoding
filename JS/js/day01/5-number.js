var a = 1;
var b = 234;
console.log(a,b);
console.log(typeof a);  //number
//八进制,以0开头
var eight = 011;
console.log('011'+eight);  // 9
//十六进制
var h = 0x12;
console.log('0x12:'+h);  // 18
//科学计数法
console.log('5*10的二次方:'+5e2);
console.log('5*10的负二次方:'+5e-2);

//NaN不是一个数值    但是属于number类型
var c = NaN;
console.log('-----------------------');
console.log(c);	//NaN
console.log(typeof c);	//number
var d = 10/'hello';  
console.log(d);  //NaN

//如果是NaN则返回true,否则返回false【not a number】
console.log('isNaN(NaN)函数使用:'+isNaN(d)); //true
console.log('isNaN(数值):'+isNaN(20)); //false

//判读两个NaN是否相等,判读一个值是否是NaN,不能使用双等去判断
console.log('两个NaN是否相等:'+(c == d));	//false
console.log('两个NaN是否相等:'+(c == NaN));	//false


//数值范围检测 isFinite()函数判断参数是否在最大值和最小值中【Infinity,-Infinity】
console.log('计算10/0的值:'+10/0);  //Infinity  无穷大
console.log('number最大值:'+Number.MAX_VALUE);
console.log('number最小值:'+Number.MIN_VALUE);
//number最大值:1.7976931348623157e+308
//number最小值:5e-324
console.log('Infinity:'+3e333); //Infinity
console.log('Infinity值的类型:'+Infinity);
console.log('-Infinity:'+(-3e333));  //-Infinity
console.log('-Infinity值的类型:'+(-Infinity));
console.log('0:'+(-3e-333));  // 0

