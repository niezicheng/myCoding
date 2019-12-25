let obj = {
	name:'zhangsan',
	age:18,
	gender:'男'
};

//for-in
//属性名组成的数组
let keys = Object.keys(obj);
console.log(keys);
//返回属性值组成的数组
let values = Object.values(obj);
console.log(values);
//返回key--value键值对组成的数组
//[['name','zhangsan'],[],[]]
let entries = Object.entries(obj);
console.log(Array.isArray(entries),'****');

//for-of遍历
//let en of entries
//let [key,value] = en
//let [key,value] of entries
for(let [key,value] of entries){
	console.log(key,value);
}

//遍历数组
let arr = ['hello','time','team'];
for(let item of arr){
	console.log(item);
}

//遍历对象
for(let [key,value] of Object.entries(obj)){
	console.log(key,value);
}

//遍历类数组
function test(){
	for(let item of arguments){
		console.log(item);
	}
}
test(1,2,3,4);





