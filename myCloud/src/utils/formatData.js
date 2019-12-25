//时间戳封装格成指定格式日期数据
export default (time)=>{
  Date.prototype.toLocaleString = function() {
    function formatData(num){
      return num>=10?num:'0'+num;
    }
    return (
      formatData(this.getFullYear()) + "-" + 
      formatData((this.getMonth() + 1)) + "-" + 
      formatData(this.getDate()) + " " + 
      formatData(this.getHours()) + ":" + 
      formatData(this.getMinutes()) + ":" + 
      formatData(this.getSeconds())
    )};
  let myDataTime = new Date(time).toLocaleString();
  return myDataTime;
}
