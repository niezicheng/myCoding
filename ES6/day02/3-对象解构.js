//对象解构
{
	let {a,b} = {a:1,b:2};
	console.log(a,b); //1 2
}
{
	let {name,age} = {
		name:'zhangsan',
		gender:'男',
		age:21
	};
	console.log(name,age);  //zhangsan 21
}
{
	//对象解构变量重命名
	let {name:myName,age:myAge} = {
		name:'zhangsan',
		gender:'男',
		age:21
	};
	console.log(myName,myAge);  //zhangsan 21
}
{
	//对象解构变量重命名
	let {name:myName,age:myAge,gender:myGender='男',address='南昌'} = {
		name:'zhangsan',
		gender:'',
		age:21
	};
	console.log(myName,myAge,myGender,address);  //zhangsan 21
}