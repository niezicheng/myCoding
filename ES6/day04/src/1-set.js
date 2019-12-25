//set集合  里面的数据不重复
let set = new Set();
console.log(set);	//Set {}

//size属性 返回集合中的属性
console.log(set.size);	//0

//添加数据
set.add(1);
set.add(1);
set.add('hello');
console.log(set); //Set {1,'hello'}
console.log(set.size);	//2


/*//删除数据
set.delete(1);
console.log(set);	//Set {'hello'}

//清空数据
set.clear();
console.log(set);  //Set {}*/

//遍历
//在Set中keys 和 values是一样的，都是value
let keys = set.keys();
console.log(keys);	//迭代器对象
let values = set.values();
console.log(values);	//迭代器对象

console.log('----------');

/*while(true){
	let result = values.next();
	if(result.done){
		break;
	}else{
		console.log(result.value);
	}
}*/

console.log('=======================')
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log('=======================')
/*for(let value of values){
	console.log(value);
}*/
console.log('----------');
console.log(set);
console.log('--------');
let entries = set.entries();
console.log(entries);	//迭代器对象
console.log('=======================')
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log('=======================')

for(let item of entries){
	console.log(item);
}




//Iterator对象可以使用for-of遍历,自己写代码遍历


//使用forEach
// set.forEach(function(value,key,set){
// 	console.log(value,key,set);
// });


let set2 = new Set([1,2,3,4,5]);
console.log([...set2]);