/*冒泡排序算法
【23,4,56,232,9,100】
	思想：(升序)
	1、第一轮先找到最大的，放到最后

	2、第二轮将第二大的，放到倒数第二个位置

	3、第三轮将第三大的，放到倒数第三个位置

	...

	内部是将两个数的交换
*/
var arr = [23,4,56,232,9,100];
console.log('初始数组：'+arr);
for(var i=0;i<arr.length;i++){
	//i+1-->第几轮查找
	var flag = true;
	for(var j=0;j<arr.length-1-i;j++){
		if(arr[j]>arr[j+1]){
			//交换位置
			var temp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			flag = false;
		}
	}
	if(flag){
		break;
	}
	console.log('第'+(i+1)+'轮排序的结果：'+arr);
}

