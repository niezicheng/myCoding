let arr = [1,2,3];

//数组填充  改变原数组
// console.log(arr.fill(9));
// console.log(arr);

//数组中是否包含某个元素   返回boolean类型
// console.log(arr.includes(2));	//true
// console.log(arr.includes(22));	//false

//遍历 keys values entries  返回迭代器数组对象
let keys = arr.keys();		//返回数组中的索引组成的迭代器数组对象
console.log(keys);
for(let key of keys){
	console.log(key);
}

let values = arr.values();		//返回数组中的元素组成的迭代器数组对象
console.log(values);
for(let key of values){
	console.log(key);
}

let entries = arr.entries();	//返回数组中的索引和元素以键值对的形式组成的迭代器数组对象
console.log(entries);
for(let [index,item] of entries){
	console.log(index,item);
}
