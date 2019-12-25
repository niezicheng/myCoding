//Number()  一元运算符+
console.log(Number(123)); //123
console.log(Number('123')); //123
console.log(Number(' +12.34')); //12.34
console.log(Number('123aaa')); //NaN
console.log(Number('1+2')); //NaN

console.log(Number(0xa)); //10 解析十六进制
console.log(Number('0xb')); //11
console.log(Number(010)); //10 不解析八进制，当做十进制来进行

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log('--------------------------------------');
console.log(parseInt(' +12.34')); //12
console.log(parseInt('123aaa')); //123
console.log(parseInt(null)); //NaN
console.log(parseInt('1+2')); //1
console.log('十六进制：'+parseInt('0xa')); //10 
console.log('八进制：'+parseInt('010')); //10
console.log('****************************************');
console.log('测试：'+parseInt('12 34.3hello'));

console.log('****************************************');
//parseFloat();中十六进制和八进制都不会被解析

console.log(parseFloat('0xa')); //0 
console.log(parseFloat('010')); //10 
console.log(parseFloat('12.34aaaa')); //12.34




