//事件传参
import React from "react";
class MyEvent extends React.Component{
  handle = (a,b,e)=>{
    console.log(a,b,e);
    //获取事件参数
    console.log(e.target.getAttribute('data-id'));
  }
  render() {
    return (
       <div>
         {/* 使用bind()默认传递参数事件对象e在参数列表的最后面 */}
         {/* <button data-id="1001" onClick={this.handle.bind(this,1002,1003)}>点击</button> */}
         <button data-id="1001" onClick={(e)=>{this.handle(1002,1003,e)}}>点击</button>
       </div>
    );
  }
}

export default MyEvent;