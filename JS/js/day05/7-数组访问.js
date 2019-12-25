var arr = [1,'zhagsan','lisi','hello'];

console.log(arr[2]); //lisi
console.log(); //undefined

//给索引为10的位置设置为123，空余的位置补undefined
arr[10] = 123;
console.log(arr); //[1,'zhangsan','lisi','hello',,,,,,123]
console.log(arr.length); //11
console.log(arr[5]); //undefined

//更改数组长度
arr.length = 20;
console.log(arr); 

arr.length = 2;
console.log(arr); //[1,'zhangsan']






