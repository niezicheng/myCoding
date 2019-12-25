//引入3-module.js中的变量,去使用
/*// import { a,b,test,m,say } from './3-module.js';
import { a,b,test } from './3-module.js';
import { m,say } from './3-module.js';		//单令模式【./3-module.js只导入一次,后面使用的是其缓存中的3-module.js文件】
console.log(a,b,test,m,say);*/

//export default的导入
import test from './3-module.js';
//export的导入
import { n,a,b } from './3-module.js';
//export和export default的导入组成对象,并且export default导入的属性名为default
import * as obj from './3-module.js';
/*console.log(obj);
console.log(obj.default);
obj.default();
console.log(test,n,a,b);*/
// test();

export {n,a} from './3-module.js';	//先导入再导出

/*import {n,a} from './3-module.js';
export {n,a};*/