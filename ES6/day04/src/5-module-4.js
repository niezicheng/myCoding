//引入3,4
//3模块中的default的导出,引4模块中的n,a  在导入某个文件中的导出变量时,初始会执行一遍导出的文件代码
import test from './3-module.js'
import {a,n} from './4-module-3.js'  //对象的解构

console.log(test,n,a);