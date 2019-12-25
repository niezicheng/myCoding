console.log(3<2);
console.log(3>2);
console.log(3>=2);
console.log(3<=2);
console.log('--------------------------');
console.log(true=='true'); //false
console.log(1=='1'); //true
console.log(true==='true');  //false
console.log(1==='1'); //false
console.log(true!=='true'); //true 
console.log(1!=='1'); //true


console.log('************************************');
console.log(0==null); //false
console.log(1==true); //true
console.log(2==true); //false    按照boolean转化为number类型进行比较，而不是按照number转化boolean来进行比较
console.log(true==2);  //false
console.log(0==undefined);//false

/*
*number比string，如果看起来一样，==true
*number比boolean，如果boolean转化number和number相等，==true
*string比boolean，即便看起来一样，==false
*null与null比较才 ==true 其它的为false
*undefined与undefined比较 ==true  其它为false
*
*/



