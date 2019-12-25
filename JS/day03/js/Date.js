var timeStamp = (new Date).getTime();
document.write(timeStamp+'</br>');
var date = new Date(timeStamp);
//2019-07-17 17:18:18
year = date.getFullYear();

month = date.getMonth()+1;
month = month<10?'0'+month:month;

day = date.getDate();
day = day<10?'0'+day:day;

hour = date.getHours();
hour = hour<10?'0'+hour:hour;

minute = date.getMinutes();
minute = minute<10?'0'+minute:minute;

second = date.getSeconds();
second = second<10?'0'+second:second;

document.write(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second+'</br>');

timeStamp = new Date('2012-12-19 23:22:11').getTime();
document.write(timeStamp+'</br>');

