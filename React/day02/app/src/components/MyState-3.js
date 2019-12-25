import React from 'react';
class MyState extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      msg:'stateMsg',
      test:'test01'
    };
  }
  //声明周期钩子函数
  //组件挂载完毕之后调用的钩子函数【组件在页面展示后在执行的函数】
  componentDidMount(){
    // alert(1);
    //改变state中的数据
    // this.state.msg = 'world';  //不能使用这种方式改变state中的数据值

    //异步设置state的数据  this.setState({},()=>{});  修改数据对象,修改数据完成回调函数
    this.setState({
      msg:'hello',
      test:'world'
    },()=>{
      console.log(this.state.msg);
    });
    console.log(this.state.msg);
  }

  //组件挂载完毕之后调用的钩子函数【组件即将在页面上显示还未显示所执行的函数】
  componentWillMount(){
    // this.state.msg = 'world';
    // alert(0);
  }
  
  render(){
    let msg = 'renderMsg';
    return (
      <div>
        <h3>MyState展示</h3>
        <h3>{msg}</h3>
        <h3>{this.state.msg}----{this.state.test}</h3>
        <h3>{this.props.msg}</h3>
      </div>
    );
  }
}

export default MyState;