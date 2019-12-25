//访问器属性，没有值，有get和set方法
var obj = {
	name:'zhangsan',
	age:21,
	_weight:120
};
Object.defineProperty(obj,'weight',{
	//获取值
	get:function(){
		return this._weight-5;
	},
	//设置值
	set:function(param){
		this._weight = param;
	},
	//enumerable:true
	configurable:true
});
/*
Object.defineProperty(obj,'_weight',{
	enumerable:false
});
*/
console.log(obj.weight); //115
obj.weight = 130;	
console.log(obj.weight);  //125
console.log(obj._weight);  //130
console.log(obj);


//查看weight和_weight的描述信息
console.log(Object.getOwnPropertyDescriptor(obj,'weight'));
console.log(Object.getOwnPropertyDescriptor(obj,'_weight'));

Object.defineProperties(obj,{
	weight:{
		enumerable:true
	},
	_weight:{
		enumerable:false
	}
});




