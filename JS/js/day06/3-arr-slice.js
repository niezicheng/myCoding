//参数是一个为从开始位置截取到末尾；参数是两个的，截取部分为开始位置到结束位置不包括结束位置的值
//返回截取部分的值,不改变原数组
var arr = [123,34,5,67,3,6,8];
var result = arr.slice(2);
console.log(result);  //[5,67,3,6,8]
console.log(arr);  //[123,34,5,67,3,6,8]

var result2 = arr.slice(2,4); 
console.log(result2); //[5.67]

//splice  可以进行删除、插入、替换
//两个参数：splice(开始位置,删除的项数)
//三个参数：splice(开始位置,删除项数,添加的元素一个或多个)
//删除的元素组成的数组
//改变原数组

var arr = [32,4,9,3,0];
var result = arr.splice(1,3);
console.log(result);  //[4,9,3]
console.log(arr); //[32,0]

//插入
arr.splice(1,0,'hello','sss');
console.log(arr);

//替换
//从索引位置为1的删除两项后在开始位置处再插入一些元素
arr.splice(1,2,1,2);
console.log(arr);
