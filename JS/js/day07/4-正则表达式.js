//进行字符串的匹配
var str = 'HELLOworld helloworld hello';
//找hello字符串，如果有返回true，如果没有返回false
var pattern = /hello/ig;
//进行模式匹配
console.log(pattern.lastIndex); //0
var result = pattern.test(str);
console.log(result); //true
console.log(pattern.lastIndex); //5
//exec() 获取匹配到的字符串返回的数组,如果没有找到,返回null;如果找到,返回包含该字符串的数组
var result = pattern.exec(str);
console.log(result); //[ 'hello', index: 11, input: 'HELLOworld helloworld hello' ]
console.log(result.length);	//1
console.log(result.index);	//11 在字符串中查找到的开始的位置
consolr.log(result.input); //str：'HELLOworld helloworld hello'
console.log(pattern.lastIndex); //16










