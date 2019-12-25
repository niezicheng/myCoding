//阶乘
var num = 5;
var mult = 1; //控制值
var str = ''; //控制字符串
for(var i=num;i>0;i--){
	if(i==1){
		str += i;
	}else{
		str += i + '*';
	}
}
console.log('str的值：'+str);






