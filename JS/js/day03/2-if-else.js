//判断一个人的年龄是否成年
var age = 22;
if(age>=18){
	console.log('成年人');
}else{
	console.log('未成年人');
}

var result;
if(age>=18)
	result = '成年人';
else
	result = '未成年人';
console.log(result);

result = age>=18?'成年人':'未成年人';
console.log(result);
