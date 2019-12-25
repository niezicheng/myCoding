import React from 'react';

function ShowInfo (props){
  if(!props.show){
    return null;
  }

  return (
    <div>
      <h3>看见我了！！！</h3>
    </div>
  );
}

export default class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show:true,
      msg:'msg'
    };
  }
  //显示与隐藏点击事件处理函数
  handleToggleClick = ()=>{
    this.setState((prevState,props)=>{
      console.log(prevState,'----',props);
      return {show:!prevState.show}
    })
    //箭头函数简写方式
    // this.setState(prevState => ({show:!prevState.show}));
  };

  render(){
    return (
      <div>
        {/* 显示与隐藏之间的切换 */}
        <button onClick={this.handleToggleClick}>
          {this.state.show?'hide':'show'}
        </button>
        <ShowInfo show={this.state.show} />
      </div>
    );
  }
}