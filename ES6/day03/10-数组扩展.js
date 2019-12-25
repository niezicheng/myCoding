//Array.from()
//Array.of()
let temp = {'0':'hello','1':'world',length:2};
console.log(Array.from(temp));

console.log(Array.of(10));
console.log(Array.of(10,11));

console.log(new Array(10));
console.log(new Array(10,11));

let arr = [24,45,24,6,45,2];

let set = new Set(arr);
console.log(set);
console.log(Array.from(set));

console.log([...set]);
console.log([...new Set(arr)]);

//find findIndex 迭代方法
//返回符合添加数组元素或undefined
let result = arr.find((item,index,arr)=>{
	return item>40;
});
console.log(result);

//返回符合条件元素的索引或-1
let result2 = arr.findIndex((item,index,arr)=>{
	return item>40;
});
console.log(result2);