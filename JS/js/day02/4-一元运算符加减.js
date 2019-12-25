var a = 'hello';
//使用一元运算符+-将其他数据类型转化为number类型,
console.log(+a);  //NaN

var str = '123hello';
console.log(typeof (+str)+(+str)); //NaN

console.log((+'123')+typeof (+'123'));  //123   number
console.log(+true); //1
console.log(+null); //0
console.log(+undefined); //NaN

console.log(+''); //0
console.log(+' '); //0

console.log(-null); //-0

console.log(+'-123'); //-123
console.log(-'-123'); //123
