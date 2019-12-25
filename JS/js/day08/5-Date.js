//日期对象 Date
//当前时间的日期对象
var date = new Date(1563355259000);
console.log(date);  //Wed Jul 17 2019 17:20:59 GMT+0800 (CST)
//获取年 月 日 时 分 秒
//时间戳  秒时间戳   毫秒的时间戳  1000
//将时间戳转换为js的时间对象在获取到年月日时分秒，展示给客户
//2019-07-17 17:18:18
console.log(date.getFullYear()); //2019
console.log(date.getMonth()+1); //0-11
console.log(date.getDate()); //17
console.log(date.getHours()); //17
console.log(date.getMinutes()); //20
console.log(date.getSeconds()); //59


var month = date.getMonth()+1;
month = month<10:'0'+month?month;
var day = date.getDate();
day = day<10:'0'+day?day


//将js的date对象转成时间戳，传递给后台
console.log((new Date()).getTime()); //毫秒时间戳   一天86400秒










