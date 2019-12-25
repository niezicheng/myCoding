import React from 'react';
class MyTest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      arr:[1,2,3],
      msg:'hello'
    }
  }
  // handle = ()=>{
  //   this.setState({
  //     count:this.state.count+1
  //   },()=>{
  //     console.log(this.state.count,'++++++++++');
  //   });
  //   console.log(this.state.count,'--------');
  // };


  // handle = ()=>{
  //   // console.log(this.state.arr.push(4));//返回添加后数组长度  arr.length
  //   // console.log(this.state.arr.splice(0,2));  //仍然是返回被删除元素组成的数组
  //   // console.log(this.state.arr.concat([4]));
  //   this.setState({
  //     // arr:this.state.arr.concat([4]);
  //     arr:[1,2,3,4]
  //   },()=>{
  //     // console.log(this.state.count,'++++++++++');
  //     console.log(this.state.arr,'++++++++++');
  //   });
  //   // console.log(this.state.count,'--------');
  //   console.log(this.state.arr,'--------');
  // };

  handle = ()=>{
    this.state.count = 10;
    console.log(this.state.count);
    // this.state.msg = 'world';
  };

  componentWillMount(){
    this.state.msg = 'world';
  }
  componentDidMount() {
    //再组件挂载后使用下面这种方式修改数据无法同步到页面上
    // this.state.msg = 'world';

    //使用this.setState()方法会重新渲染页面  更新数据
    // this.setState({
    //   msg:'world'
    // });
  }
  render(){
    return (
      <div>
        <h2>{this.state.count}---{this.state.arr.toString()}---{this.state.msg}</h2>
        <button onClick={this.handle}>点击</button>
      </div>
    );
  }
  
}

export default MyTest;