var a;  //undefined,只声明不初始化
console.log('a的值：'+a);

//使用typeof关键字进行数据类型的判断
console.log('a的数据类型：'+typeof a);	//undefined
console.log('undefined的数据类型：'+typeof undefined);	//udefined
//undefined 只有一个值，就是undefined值

var b = undefined;
console.log('b的值：'+b);
console.log('------使用,隔开输出两个变量------');
console.log('b的值：',b);

//console.log(c);   使用没有声明过的变量会报错 c is not defined

//变量声明提升
console.log(c);//undefined,
var c = 1;		//只是变量声明提升到代码的第一行，变量初始化不会提升，然后再顺序解析执行代码:
console.log(c); //c=1
