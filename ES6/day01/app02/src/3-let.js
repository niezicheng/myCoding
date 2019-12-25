//闭包
{
	let arr = [];
	for(let i=0;i<10;i++){
		arr[i] = function(){
			console.log(i);
		}
	}
	arr[5]();
}
console.log(arr);