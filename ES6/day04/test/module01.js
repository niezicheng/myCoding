//直接导出单个变量或单个函数
export let x = 10;
export function say(){
	console.log('say');
};

//模块中自定义的变量及方法
let m = 1;
let n = 2;
let test = function(){
	console.log('test');
};

//可以使用对象解构导出多个变量或使用表达式声明的方法
export { m,n,test }
//导出变量m在导入模块中使用temp变量接受
export {x as temp}
let y = 20;
export default y;
