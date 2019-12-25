//需要导出内容，让其他模块使用
/*let a = 1;
let b = 2;
let test = function(){
	console.log('test');
};
*/
console.log('3-module.js ...')
//导出
/*export { a,b,test }
export let m = 10;
export function say(){
	console.log('say');
};*/

//默认导出【一个模块中只能存在一个默认导出】(一般不定义名字,在导入的时候随意取名)
export default function(){
	console.log('default');
}


/*export default {
	name:'zhangsan',
	age:12
}*/

// export default 'hello'

let m = 100;
// export default m;
export let n = 10;
export let a = 1;
export let b = 2;
