function test(a,b=1,c,d){};
console.log(test.name);  //test

//形参个数【遇到添加默认值的形参直接停止长度计算】
console.log(test.length);	//1