"use strict";

var _module = require("./module01.js");

var obj = _interopRequireWildcard(_module);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(obj); //获取a.js文件导出的m,n,test变量
/*import { temp,m,n,test } from "./module01.js"
import {say} from "./module01.js"

console.log(temp,say,m,n,test);*/

console.log(obj.default);