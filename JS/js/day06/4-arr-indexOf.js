//indexOf lastindexOf 返回索引或-1
//参数：要查找的元素   开始查找的位置
var arr = [2,5,67,'2',3,2,45];
//找数组中有没有元素2
console.log(arr.indexOf(2)); //0
console.log(arr.indexOf(2,1)); //5
console.log(arr.indexOf(22)); //-1
//判断数组中是否含有该元素
//if(arr.indexOf(2) != -1){ }

console.log(arr.lastIndexOf(2));  //5
console.log(arr.lastIndexOf(2,3)); //0



