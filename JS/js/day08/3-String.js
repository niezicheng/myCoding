//String属性和方法
//length  字符个数
//charAt(index) 获取index位置上的字符
//charCodeAt(index)  //获取index位置上字符的ASCII码值
//遍历字符串，拿到每一个字符串和编码
var str = 'abcdefg';
str.split('').forEach(function(item){
	console.log(item,'---',item.charCodeAt(0));
});

for(var i=0;i<str.length;i++){
	console.log(str.charAt(i),'---',str.charCodeAt(i));
}

//去除所有的空格
console.log(str.split(' ').join(''));
//去除前后置空格
console.log(str.trim());
console.log(str.concat('hello'));
console.log(str.concat({name:'nzc'}));

//转为全大写
console.log(str.toUpperCase());
//转为全小写
console.log(str.toLowerCase());








