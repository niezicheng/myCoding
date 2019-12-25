//声明数组
//1.构造函数
var arr = new Array();
console.log(arr);  //[]

var arr = new Array(20);   //设置数组长度为20
console.log(arr);  //[,,,,,,,,,]
console.log(arr[5]);  //undefined

var arr = new Array('zhangsan','lisi','wangwu');
console.log(arr); //['zhangsan','lisi','wangwu']
console.log(arr.length); //3
console.log(arr[0]); //zhangsan
console.log(arr[5]);   //undefined  访问数组中元素不存在

//数组字面量方式创建
var arr = [];
console.log(arr);  //[]

var arr = ['zhangsan','lisi'];
console.log(arr); //['zhangsan','lisi']






