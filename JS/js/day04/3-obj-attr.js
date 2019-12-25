var obj = {
	name:'zhangsan',
	age:21
};
//通过.访问对象属性
console.log(obj.name);
//通过[]访问对象属性
console.log(obj['name']);

var age = 'age';
console.log(obj[age]);  //中括号里面未使用'',里面的age会被当做变量来处理，直接使用未定义变量会报错

//遍历对象
for(var key in obj){  //for--in  循环遍历
	//key-->属性名--变量
	//obj.key 访问的是在对象obj中key的属值。 undefined
	console.log(typeof key);
	console.log(key+'---'+obj[key]);
}





