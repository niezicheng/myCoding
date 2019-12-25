var str = 'HELLO wor Hello ld hello';
//var pattern = /hello/ig;
var pattern = /(hello)/i;  //(hello) 分组，代表()为一个整体
/*console.log(pattern.test(str)); //false
console.log(pattern.lastIndex); //0
*/
/*console.log(pattern.exec(str)); //null
console.log(pattern.lastIndex); //0
*/
//将匹配到的所有字符串拿出来放到一个数组中


/*var arr = [];
while(result = pattern.exec(str)){
	//console.log(result);
	//arr.push(result[0]);
	arr = arr.concat(result);
}
console.log(arr);
*/


//String类型提供的正则表达式方法，返回所有满足条件的元素组成的数组
var result = str.match(pattern);
console.log(result); //[ 'HELLO', 'HELLO', index: 0, input: 'HELLO wor Hello ld hello' ]


//匹配到返回索引，没有匹配到返回-1
console.log(str.search(pattern)); //0


var str = 'hello hello hello world';
//将hello字符串替换成js字符串,不改变原字符串，返回替换后的字符串
var result = str.replace(/hello/ig,'js');
console.log(result);
console.log(str); //不改变原字符串

var str = '12&34&45';
//返回的为按指定格式拆开的数值转化为的数组
console.log(str.split('&'));

console.log(str.split(/&/));

console.log(str.split(''));













