var arr = [1,2,3,4];

console.log(typeof arr);  //object
console.log(arr instanceof Array);  //true
console.log(arr instanceof Object);  //true
console.log(Array.isArray(arr));  //true

function test(){
	console.log(Array.isArray(arguments)); //false
}
test();

//数组序列化【将数组转化为字符串】
console.log('---------------------------------');
console.log(arr.toString()); //1,2,3,4
console.log(arr.join());  //1,2,3,4
console.log(arr.join("&"));  //1&2&3&4
console.log(typeof arr.join("&"));
console.log(JSON.stringify(arr)); //[1,2,3,4]【字符串类型】








