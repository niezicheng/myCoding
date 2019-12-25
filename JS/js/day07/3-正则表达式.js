//创建正则表达式对象
//1.构造函数
var pattern = new RegExp('hello','ig');

console.log(pattern);

//2.字面量
var pattern = /hello/ig;
console.log(pattern);

//正则表达式的使用
//正则表达式对象的属性
//判断是否全局查找
console.log(pattern.global); //true
//判断是否忽略大小写
console.log(pattern.ignoreCase);  //true
//是否多行查找
console.log(pattern.multiline); //false
//正则表达式文本
console.log(pattern.source); //hello
//下一次检索的位置,有g修饰会维护lastIndex,没有g修饰,lastIndex每次都是0
console.log(pattern.lastIndex); 









