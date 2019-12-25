import React from 'react';

export default class SetState extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
  }
  //显示与隐藏点击事件处理函数
  plusOne = ()=>{
    //使用对象作为参数  setState为异步操作【多次调用改变同一数据效果会合并】【不管调用几次setState最终都只相当于执行了一次】
    //页面显示为1  预期效果是2
    // this.setState({
    //   count:this.state.count+1
    // })
    // console.log('第一次调用setState',this.state.count);

    // this.setState({
    //   count:this.state.count+1
    // })
    // console.log('第二次调用setState',this.state.count);

    //使用函数作为参数 【可以获取前面state中的数据，可以将更新操作建立在彼此之上】[异步操作]
    //页面显示为2
    this.setState((prev)=>({
      count:prev.count+1
    }))
    console.log('第一次调用setState',this.state.count); //0

    this.setState((prev,props)=>{
      //prev为上一状态的state值，props为主键传递过来的参数
      console.log(prev,props)
      return {
        count:prev.count+1
      }
    })
    console.log('第二次调用setState',this.state.count); //0

    //在setTimeout函数中使用setState方法时同步操作【即数据立即更新】
    setTimeout(()=>{
      this.setState({
        count: this.state.count + 1
      });
      console.log('第三次调用setState',this.state.count); //3

      this.setState({
        count: this.state.count + 1
      });
      //第四次输出
      console.log('第四次调用setState',this.state.count); //4
    },0)


  };
  

  render(){
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.plusOne}>
          plusOne
        </button>
      </div>
    );
  }
}