let obj = {};
let obj1 = {
	name:'zhangsan',
	age:18,
	friends:[1,2,3,4],
	count:{
		time:'2019-08-14'
	}
};
let obj2 = {
	name:'lisi',
	gender:'男',
	
	sayName:function(){}
};
let obj3 = {
	color:'red',
	weight:'100'
};



function myClone(target,...tail){
	//tail为数组，里面为参数对象
	tail.forEach(function(item,index){
		//item是一个个对象
		for(key in item){
			// if((typeof item[key]) === 'function'){

			// 	console.log(item[key].toString());
			// 	target[key] = item[key].toString();
			// }else{
			 
			// if(Array.isArray(item[key])){
			// 	target[key] = JSON.parse(JSON.stringify(item[key]));
	
			if(item[key] instanceof Object && (typeof item[key]) !== 'function'){
			target[key] = JSON.parse(JSON.stringify(item[key]));
			}else {
				target[key] = item[key];	
			}			
			// }
		}
	});
	return target;
}

myClone(obj,obj1,obj2);
console.log(obj);
console.log(obj.sayName === obj2.sayName);  //true  引用赋值
console.log(obj.friends === obj1.friends);  //false
console.log(obj.count === obj1.count);  //false
