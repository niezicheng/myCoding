//多种表单控件的双向数据绑定state中的数据
//当前组件中有很多数据，其中有一个数据存放，其中有一个数据存放的是模态框表单中的数据
import React,{Component} from 'react';
class MyForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      //页面显示男，女传递后台数据为：male,female
      genders:[{
        name:'男',
        value:'male'
      },{
        name:'女',
        value:'female'
      }],
      //地址
      addresses:[{
        name:'南昌',
        value:'nanchang'
      },{
        name:'山西',
        value:'shanxi'
      },{
        name:'江苏',
        value:'jiangsu'
      }],
      //描述信息
      msg:'注册页面',
      form:{
        username:'1',
        age:'2',
        gender:'female',
        address:'nanchang',
        desc:'5'
      }
    };
  }
  //change事件处理程序
  inputChange = (attrName,e)=>{
    // console.log(attrName,'-----------');
    //获取到副本form,修改副本form中的username,在设置到state的from上
    // let form = Object.assign({},this.state.form);
    // form[attrName] = e.target.value;
    this.setState({
      form:{...this.state.form,[attrName]:e.target.value}
    })
  }
  // radioChange = (e)=>{
  //   let form = Object.assign({},this.state.form);
  //   form.gender = e.target.value;
  //   this.setState({
  //     form
  //   })
  // }

  //提交表单数据
  toSubmit = ()=>{
    console.log(this.state.form);
    let obj = {...this.state.form};
    console.log(obj);
    console.log(obj === this.state.form); //false
  }
  render(){
    const {form} = this.state;
    return (
      <div className='MyForm' style={{
        padding:20
      }}>
        <h3>{this.state.msg}</h3>
        <form action="">
          用户名：
          <input type="text" value={form.username} onChange={this.inputChange.bind(this,'username')} /><br/>
          {/* <input type="text" value={form.username} name='username' onChange={(e)=>{this.inputChange('username',e)}} /><br/> */}
          年龄：
          <input type="number" value={form.age} onChange={this.inputChange.bind(this,'age')} /><br/>
          {/* 性别：
          <input type="radio" value='男'/>
          <input type="radio" value='女'/><br/> */}
          性别：
          {
            this.state.genders.map((item,index)=>{
              return (
                <label htmlFor="" key={index}>
                  <input onChange={this.inputChange.bind(this,'gender')} type="radio" value={item.value} checked={form.gender === item.value}/>{item.name}
                </label>
              );
            })
          }<br/>
          地址：
          <select name="" id="" value={form.address} onChange={this.inputChange.bind(this,"address")}>
            <option value="">请选择</option>
            {
              this.state.addresses.map((item,index)=>{
                return (
                  <option value={item.value} key={index}>{item.name}</option>
                );
              })
            }
          </select><br/>
          描述:<br />
          <textarea onChange={this.inputChange.bind(this,'desc')} value={form.desc} name="" id="" cols="30" rows="10"></textarea>
        </form>
        <button onClick={this.toSubmit}>提交给后台的数据</button>
      </div>  
    );
  }
  
}

export default MyForm;