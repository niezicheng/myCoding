var str = 'hello world javaScript';
//贪婪模式和非贪婪模式  默认是贪婪模式【优先匹配最多次数的】  在贪婪模式后面加？ 将其转化为非贪婪模式
var pattern = /\w{3,8}?/i;
console.log(pattern.exec(str)); //hello

//验证电话号码
var str = '13579536893';
var pattern = /^\d{11}$/;  //^以什么开始，$以什么结束
console.log(pattern.test(str)); //true





