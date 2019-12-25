var arr = [23,56,12,43,6,23,26];
console.log(arr);
//反转 翻转 reverse  改变原数组
//console.log(arr.reverse());
//console.log(arr);
console.log('----------------------------');
//数组排序
//console.log(arr.sort()); //按照字符串ASSIC码形式比较
console.log(arr.sort(com));
console.log(arr);
function com(a,b){
	//return a-b;  //升序
	//负数a,b不发生交换 a b  a<b 负值  不交换;  a b  a<b  升序排列
	//正数数a,b不发生交换   a b  a>b 正值  交换;   b  a   b<a  升序排列

	//return b-a;  //降序

  //降序
	if(a<=b){
		return -1;  //负数不发生交换
	}else{
		return 1;  //正数发生交换
	}

}


var stu = [
	{
		name:'zhangsan',
		age:14,
	},
	{
		name:'lisi',
		age:20
	}
];


stu.sort(compare('name','升序'));
console.log(stu);
stu.sort(compare('age','降序'));
console.log(stu);

//万能比较器
function compare(attr,rules){
	return function(o1,o2){
	 	if(rules === '升序'){
			if(o1[attr] <= o2[attr]){
				return -1;
			}
			return 1;
		}else{
			if(o1[attr] >= o2[attr]){
				return -1;
			}
			return 1;
		}
	}
}







