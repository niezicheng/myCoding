//null、undefined 没有toString()函数方法
var num = 12;
//转成十进制的字符串
console.log(num.toString());
//转成二进制的字符串
console.log(num.toString(2)); //'1010'
//八进制
console.log(num.toString(8)); //'14'
//十六进制
console.log(num.toString(16)); //'c'

var bool = true;
console.log(bool.toString()); //'true'
console.log(false.toString()); //'false'

//不可直接使用number类型的值调用toString()方法
//console.log(3.toString());
//包装性属性中的类型 Number
console.log((3).toString());  //'3'

//console.log(null.toString);
console.log('--------------------------------------');
console.log(String(123)); //'123'
console.log(String(null));  //'null'
console.log(String(undefined)); //'undefined'
console.log(String(true)); //'true'

console.log('*****************************************');
//使用拼接字符串方式
console.log(123+''); //'123'
console.log(true+''); //'true'
console.log(null+''); //'null'
console.log(undefined+'');//'undefined'

