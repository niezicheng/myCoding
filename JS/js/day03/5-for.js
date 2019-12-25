//for循环语句
//输出1~10
for(var i=1;i<=10;i++){
	console.log(i);
}

console.log('循环外部的i的值：'+i);

console.log('------------------------------');
var j = 1;
for(;j<=1;){
	console.log(j);
	j++;
}

//死循环
var count = 0;
my:for(;;){
	console.log(count);
	count +=1;
	if(count == 5){
		continue my; //跳出本次循环，执行下一次循环
	}
	console.log('**********************');
	if(count == 10){
	  break my;  //跳出整个循环语句
	}
}
console.log(count);
