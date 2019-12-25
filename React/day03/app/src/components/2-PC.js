//在父组件中控制修改子组件中的数据
//如何在父组件中拿到子组件的实例，如果能拿到就可以通过子组件的实例调用setState更改子组件中的state的数据
import React,{Component} from 'react';
import MyC from './2-MyC';
//PC当做父组件使用
class PC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      parentMsg:'parentMsg'
    };
  }
  
  
  changeChildState =()=>{
    const myc = this.refs.myc;
    console.log(myc.state.msg);
    myc.setState({
      msg:'hello'
    });
  };
  //更改父组件PC中state中的数据函数
  changeParentState = ()=>{
    this.setState({
      parentMsg:'parentHello'
    });
  };
  render(){
    return (
      <div>
        {/* ref属性接受回调函数，参数为该dom元素或组件 */}
        <div ref={(node)=>{
          console.log(node,'-----'); //回调函数参数【DOM节点,组件实例】,该ref属性属性值不会添加到refs中
        }}>ref值为回调函数</div>
        <br/>
        <button onClick={this.changeChildState}>点击更改子组件中state的msg</button>
        <MyC ref='myc' parentMsg={this.state.parentMsg} changeParentState={this.changeParentState}></MyC>
      </div>
    );
  }

  // 组件挂载后的钩子函数
  // componentDidMount(){
  //   console.log(this.refs);  //对象中不包含还有ref属性值为回调函数的的组件或dom元素 
  // }
}
export default PC;