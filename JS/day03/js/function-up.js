/*console.log(one); //[Function：one]
// function one(){
//     console.log('one');
// }
var one = 123;

// console.log(one); //[Function：one]
var one = function(){
	console.log('hhhhhh')
	return 222;
};
function one(){
    console.log('one');
    return 111;
}
// one();
console.log(one());*/

// function test(){};
/*test  = 1;
console.log(test);*/




/*test();
console.log(g);
function test(){
	console.log(g);
	g = 10;
}
console.log(g);*/


/*console.log(test);
(function test(){
	console.log(test1);
})()
var test1 = 1;
*/

//////////////////////////////////////////////////////////////////
console.log('-------------------------去除数组中重复的数值----------------------------------');
var arr = [1,2,3,3,4];
console.log(arr);
console.log(...new Set(arr));



console.log('-----------------------filter----------------------------');
var arr = [1,4,false,null,undefined,0];
console.log(arr.filter(fun));    //不改变原始数组
function fun(param){
	return Boolean(param) == true;
}
//null与undefined二者只与自身相等
console.log((Boolean(null) == false)+'-------'+(undefined == false));
console.log(arr);



console.log('-------------------------myFilter-------------------------------');
Array.prototype.myFilter = function(fun){
	// console.log('--------'+this);
	var array = [];
	var j = 0;
	/*for(var i=0;i<this.length;i++){
		// console.log(i+'---------'+Boolean(this[i])+'--------'+fun());
		if(Boolean(this[i]) == fun()){
			// console.log('---------');
			array[j] = this[i]
			j++;
		}
	}*/
	for(var i=0;i<this.length;i++){
		if(fun(this[i])){
			array[j] = this[i];
			j++;
		}
	}
	return array;
};
function myFun(param){
	return Boolean(param) == false;
}
console.log(arr.myFilter(myFun));
console.log(arr);



console.log("-----------------------------------------------------------------------");
var arr = [1,2,3,4];
console.log(arr.splice(2));
console.log(arr.splice(2,1));

console.log("********************************");
var arr = [23,45,1,4,3,45,7];
var result = arr.every(function(item,index,arr){
        console.log(this); //{}
        return item>20;
},{});
console.log(result); //false
console.log(arr);
console.log("************************************************");
var arr = [1,2,3,4];
var array = [];
for(var i=0;i<arr.length;i++){
	array.push(arr[i]);
}
var result = array.filter(function(item,index,arr){
	return item !== 2;
});
console.log(result);
console.log(array);

console.log("************************************************");
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var result = arr1.concat(arr2);
console.log(result);
console.log(arr1);

console.log("-------------------------------------------------");
var a = 10;
function test(){
	console.log(a);
	a = 20;
}
test();



