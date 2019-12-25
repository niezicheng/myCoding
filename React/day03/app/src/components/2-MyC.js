//子组件
import React,{Component} from 'react';
class MyC extends Component{
  constructor(props) {
    super(props);
    this.state ={
      msg:'msg'
    };
  }
  
  render(){
    return (
      <div>
        <h3 className='title'>子组件MyC中state的数据：{this.state.msg}</h3>
        <h3>接受父组件的数据：{this.props.parentMsg}</h3>
        {/* 通过调用父组件中传递过来的修改父组件信息函数进行修改 */}
        <button onClick={this.props.changeParentState}>更改父组件的中数据</button>
      </div>
    );
  }
}

export default MyC;