//var str = 'helababab2lo123waa8orld567ae';
//var pattern = /[abe][abe]/ig;
//var pattern = /[abe]{2,}\d/ig;
//var pattern = /[^abe]/ig;
var pattern = /^[a-z].*\d$/g;
var str = 'ajmjkcnksdnc9';

var pattern = /^\d{11}$/g;

console.log(str.match(pattern)); 
//xxx@xxxx.xxx
//3-6 4-10 3-5
//var pattern = /^([a-z]|[0-9]){3,12}@[a-z]{2,5}\.[a-z]{3,5}$/ig;
var pattern = /^([a-z]|[0-9]){3,12}@\1{3,12}\.[a-z]{3,5}$/i;


var str = '23222@232.com';
console.log(pattern.test(str));
str = 'ababaabaa'
console.log(str.match(/([a-z]).\1/g));  //['aba','aba']
console.log(str.match(/([a-z]){2}.\1/g));  //['abab','aaba']
console.log(str.match(/([a-z]){2}.\1{2}/g));  //[babaa]
console.log(str.match(/([a-z]).\1{2}/g));  //['abaa']


/*
如果圆括号后面有次数用的是最后那个圆括号匹配的结果
可以再不加g的match()方法中拿到该正则表达式中括号的子表达式

*/

var str = 'hellohelloworld'
console.log(str.match(/(hello)+?/g));  //默认是贪婪模式，加？转为懒惰模式【匹配最小次数优先】



