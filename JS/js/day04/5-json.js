//对象序列化
var obj = {
name:'zhangsan',
age:21
};
console.log(obj);
console.log(JSON.stringify(obj));
//将JSON字符串转化为js对象
var str = JSON.stringify(obj) + '';
console.log(JSON.parse(str));




