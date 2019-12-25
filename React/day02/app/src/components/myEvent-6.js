import React from 'react';
class MyEvent extends React.Component{
  //1
  // handle = (e)=>{
  //   console.log(this,e);
  // };
  
  //2   3
  handle(e){
    console.log(this,'----',e);
  }
  render(){
    return (
      <div>
        {/* 1 */}
        {/* <button onClick={this.handle}>点击我</button> */}
        {/* 2 */}
        {/* <button onClick={this.handle.bind(this)}>点击我</button> */}
        {/* 3  (e)=>{}为事件处理函数  在箭头函数内调用实例方法handle(e)并传递事件参数对象 */}
        <button onClick={(e)=>{this.handle(e)}}>点击我</button>
      </div>
    );
  };
}

export default MyEvent;