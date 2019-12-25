//concat slice splice
//拼接   截取  删除 替换 插入
var arr = [3,4,5,2,4];
var arr2 = [1,2,3,4,5];
//arr.push(arr2);
console.log(arr); //[3,4,5,2,4,[1,2,3,4,5]]
//如果arr2是数组，遍历arr2，使用push依次添加到arr末尾
/*if(Array.isArray(arr2)){
	for(var i=0;i<arr2.length;i++){
		arr.push(arr2[i]);
	}
}
console.log(arr);
*/

var result = arr.concat(arr2);
console.log(arr,'--------');
console.log(result,'+++++++++');

var result2 = arr.concat('hello');
console.log(result2);

/*
	concat()方法
	1.不改变原数组，创建副本数组
	2.如果参数是数组，展开放入
	3.如果是其他参数添加到末尾
	4.返回副本
*/


Array.prototype.myConcat = function(param){
	//创建副本数组
	var array = [];
	for(var i=0;i<this.length;i++){
		array.push(this[i]);
	}
	//判断添加数据类型
	if(Array.isArray(param)){
		for(var j=0;j<param.length;j++){
			array.push(param[j]);
		}
	}else{
		array.push(param);
	}
	return array;
};

console.log('****************************************');

var result = arr.myConcat('hello');
console.log(result);
var result2 = arr.myConcat([7,8,9,10]);
console.log(result2);
console.log(arr);
