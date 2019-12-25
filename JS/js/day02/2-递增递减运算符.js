var a = 5;
a++;    //a = a+1;
console.log(a); //6
console.log(++a);//7
console.log('a的值为：'+a);
//先自增再赋值
var b = a++;
console.log('计算b = a++的结果：');
console.log('b= '+b+',a= '+a);
//先赋值再自增
var b = ++a;
console.log('计算b = ++a的结果：');
console.log('b= '+b+',a= '+a);








