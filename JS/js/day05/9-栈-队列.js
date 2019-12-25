//栈和队列方法\
//栈
var arr = [2,3,4,5,6];
console.log(arr);  //[2,3,4,5,6]
console.log('返回值为添加数据后数组的长度：'+arr.push(7)); //返回添加数据后数组的长度：6
console.log(arr);  //[2,3,4,5,6,7]

console.log('返回值为取出的栈顶元素：'+arr.pop()); //取出栈顶元素并返回该栈顶元素值：7
console.log(arr);  //[2,3,4,5,6]

console.log('-------------------------------------------');
//队列
console.log('返回值为添加数据后数组长度：'+arr.unshift('hello')); //6
console.log(arr); //['hello',2,3,4,5,6]
console.log('返回值为取出的元素：'+arr.shift()); //hello
console.log(arr); //[2,3,4,5,6]


