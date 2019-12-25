var num = -12.3;
//向大取整
console.log(Math.ceil(num)); //-12
//向小取整
console.log(Math.floor(num)); //-13
//console.log(parInt(num));
//四舍五入
console.log(Math.round(13.6)); //14
console.log(Math.round(13.2)); //13
//随机数
console.log(Math.random()); //[0,1)

//前世今生
var arr = ['李白','韩信','诸葛亮','赵云','关羽','刘备','张飞','孙尚香','鲁班','李元芳','狄仁杰','孙策','小乔'];
//随机数--->数组的下标 [0,1)  [0,13)
var index = Math.floor(Math.random()*arr.length);
console.log(arr[index]);

console.log(Math.min(23,45,23,52,6));
console.log(Math.max(23,45,23,52,6));

console.log(Math.max([23,45,23,52,6].join(',')));




