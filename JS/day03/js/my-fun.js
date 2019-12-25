console.log('-------------------------------myReverse()方法-----------------------------------------');
//reverse
//1.数组调用形式
Array.prototype.myReverse1 = function(){
	for(var i=0;i<this.length/2;i++){
		var temp;
		j = (this.length-1)-i;
		if(j>i){
			temp = this[i];
			this[i] = this[j];
			this[j] = temp;
		}
	}
	return this;
}
var arr = [20,16,4,37,23];
console.log(arr);
console.log(arr.myReverse1());

console.log('*********************************');

//2.传递参数形式
function myReverse2(array){
	for(var i=0;i<array.length/2;i++){
		var temp;
		j = (array.length-1)-i;
		if(j>i){
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	return array;
}
var arr = [1,34,6,78,3,10];
console.log(arr);
console.log(myReverse2(arr));

console.log('-------------------------------myPush()方法-----------------------------------------');
//push
//1.数组调用形式
Array.prototype.myPush1 = function(num){
	this[this.length] = num;
	console.log(this);
	return this.length;
}
var arr = [1,3,5,7];
console.log(arr.myPush1(9));  //输出为添加数据后数组的长度

console.log('*********************************');

//2.传递参数形式
function myPush2(array,num){
	array[array.length] = num;
	console.log(array);
	return array.length;
}
var arr = [2,4,6,8];
console.log(myPush2(arr,10)); //输出为添加数据后数组的长度


console.log('-------------------------------myPop()方法-----------------------------------------');
//pop
//1.数组调用形式
Array.prototype.myPop1 = function(){
	var num = this[this.length-1];
	this.length -= 1;
	console.log(this);
	return num;
}
var arr = [1,3,5,7,9];
console.log(arr.myPop1());  //输出为删除的值

console.log('*********************************');

//2.传递参数形式
function myPop2(array){
	var num = array[array.length-1];
	array.length -= 1;
	console.log(array);
	return num;
}
var arr = [2,4,6,8,10];
console.log(myPop2(arr));  //输出为删除的值

////////////////////////////////////////////////////////////////////////////////////////
console.log("------------------------------------------------------------------");
var arr = [1,2,3,4];
var item = [2,3,4,5];
Array.prototype.myFun = function (item,msg){
	var array = [];
	if(Array.isArray(item)){
		for(var i=0;i<this.length;i++){
			if(item.indexOf(this[i]) == -1 && array.indexOf(this[i]) == -1){
				array.push(this[i]);
			}
		}
	}else{
		if(this.indexOf(item) != -1){
			for(var j=0;j<this.length;j++){
				if(item !== this[j]){
					array.push(this[j]);
				}
			}
		}
	}
	if(msg === '改变原数组'){
		var length = this.length;
		for(var m=0;m<length;m++){
			this.pop();
		}
		// console.log(this);
		for(var n=0;n<array.length;n++){
			this.push(array[n]);
		}
		return this;
	}

	return array;
}

console.log(arr.myFun(item,"改变原数组"));
console.log(arr);


console.log('-----------------------------------------------');
function Animal(name,age) {
    this.name = name
    this.age = age
}
function Dog(name,age,gender){
    Animal.apply(this,arguments);
    this.gender = gender
}
Dog.prototype = new Animal() //实例

var dog = new Dog('tom',3,'male');
console.log(dog instanceof Animal)//true