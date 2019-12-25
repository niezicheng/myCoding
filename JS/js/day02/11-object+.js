var obj = {
	name:"nzc",
	valueOf:function(){
		return '1';
	}
};

console.log(obj+1); //'11'

console.log(parseFloat(0.1)+parseFloat(0.2));  //没有作用
//0.3
console.log((0.1*10+0.2*10)/10);






