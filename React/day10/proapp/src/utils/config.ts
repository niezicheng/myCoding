const baseURL = 'http://134.175.154.93:8099';
const pageSize = 10;
function parseDate(){
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  // month = month>10?month:('0'+month);
  let day = date.getDate()
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return year+'-'+formateDate(month)+'-'+formateDate(day)+' '+formateDate(hours)+':'+formateDate(minute)+':'+formateDate(second);
}
function formateDate(num){
  return num>10?num:('0'+num);
}

export default {
  baseURL,
  pageSize,
  parseDate

}