//表单的双向数据绑定
import React,{Component} from 'react';
class MyForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputVal:'inputValue'
    };
  }
  
  changeHandle = (e)=>{
    this.setState({
      inputVal:e.target.value
    });
  };

  render(){
    return (
      <div>
        <form action="">
          用户名：
          <input value={this.state.inputVal} type="text" onChange={this.changeHandle} />
        </form>
      </div>
    );
  }
}

export default MyForm;