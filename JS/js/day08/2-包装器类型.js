//Boolean Number String
//Boolean()
//Number()
//String()
var n = new Number(123);
console.log(n); //Number的实例
console.log(typeof n); //object
console.log(n instanceof Number); //true
console.log(n instanceof Object); //true
var m = 123;
console.log(m);  //基本number数据类型
console.log(typeof m); //number
console.log(m instanceof Number); //false
console.log(m instanceof Object); //false

//可以用来将基本数据类型转化为包装器类型
var o = new Object(123);
console.log(o);  //[Number：123]
console.log(o instanceof Number); //true
console.log(o instanceof Object); //true














