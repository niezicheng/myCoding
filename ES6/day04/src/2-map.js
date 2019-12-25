let map = new Map();
console.log(map);
console.log(map.size);

//添加数据	key-value  key值相同则会覆盖其value值
map.set('name','nzc');
map.set('age',18);
map.set('name','lisi');
map.set({},'lisi');
console.log(map);
console.log(map.size);

/*//通过key值获取value值
console.log(map.get('name'));
//console.log(map.get({}));

console.log(map.delete('name'));
console.log(map);

console.log(map.clear());
console.log(map);*/

//遍历 
let keys = map.keys();
console.log(keys);		//返回迭代器对象

let values = map.values();
console.log(values);		//返回迭代器对象

let entries = map.entries();
console.log(entries);		//返回迭代器对象

map.forEach(function(value,key,map){
	console.log(value,key,map);
});