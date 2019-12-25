//every some filter map forEach
var arr = [23,45,1,4,3,45,7];

Array.prototype.myEvery = function(fun,funThis){
	//var result;
	for(var i=0;i<this.length;i++){
		var result = fun.call(funThis,this[i],i,this);
		if(!result){
			//break;
			return result;
		}
	}
	return result;
};



var result = arr.myEvery(function(item,index,arr){
	console.log(this); //{}
	return item>20;
},{});
console.log(result); //false




