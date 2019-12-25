import React from 'react';

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //性别
      gender:[{
        value:'male',
        name:'男'
      },{
        value:'female',
        name:'女'
      }],
      //hobbies
      hobbies:[{
        value:'singing',
        name:'唱歌'
      },{
        value:'dancing',
        name:'跳舞'
      },{
        value:'rap',
        name:'rap'
      },{
        value:'basketball',
        name:'篮球'
      }],
      // cities
      cities:[{
        value:'nanchang',
        name:'南昌'
      },{
        value:'jiangsu',
        name:'江苏'
      },{
        value:'shanghai',
        name:'上海'
      },{
        value:'shenzhen',
        name:'深圳'
      }],

      //单个用户信息
      user:{
        username:'zhangsan',
        password:'',
        gender:'male',
        hobbies:['singing','rap'],
        cities:'jiangsu',
        desc:'你学习了吗？？？'
      }
    };
  }
  //表单双向数据绑定函数
  handleChange = (e)=>{
    //获取相应事件目标
    const target = e.target;
    // let value = target.value;
    //获取事件目标的value
    // console.log(target,'======');
    // const value = target.type === 'checkbox'?target.checked:target.value;
    let {hobbies} = this.state.user;
    
    if(target.type === 'checkbox'){
      if(hobbies.includes(target.value)){
        let index = hobbies.indexOf(target.value);
        hobbies.splice(index,1);
      }else{
        hobbies.push(target.value);
      }
    }
    const value = target.type === 'checkbox'?hobbies:target.value;

    //获取改变的数据中的属性
    const name = target.name;

    this.setState({
      user:{...this.state.user,[name]:value}
    },()=>{
      console.log(this.state.user,'+++++++');
    })
  }
  render(){
    const {user} = this.state;
    return (
      <div className='form'>
        <form action="">
          <div className="item">
            <label htmlFor="">用户号:</label>
            <input type="text" name='username' value={user.username} onChange={this.handleChange}/>
          </div>
          <div className="item">
            <label htmlFor="">密码:</label>
            <input type="password" name='password' value={user.password} onChange={this.handleChange}/>
          </div>
          <div className="item">
            {/* 循环遍历 */}
            {
              this.state.gender.map((item,index)=>{
                return (
                  <label htmlFor="" key={index}>
                    <input type="radio" name='gender' value={item.value} onChange={this.handleChange} checked={user.gender === item.value}/>{item.name}
                  </label>
                )
              })
            }
          </div>
          <div className="item">
            爱好：
            {/* 数据循环遍历 */}
            {
              this.state.hobbies.map((item,index)=>{
                return (
                  <label htmlFor="" key={index}>
                    <input value={item.value} checked={user.hobbies.includes(item.value)} name='hobbies' type="checkbox" onChange={this.handleChange} />{item.name}
                  </label>
                )
              })
            }
          </div>
          <div>
            所在城市：
            <select name="cities" id="" value={user.cities} onChange={this.handleChange}>
              {/* 数据循环驱动 */}
              {
                this.state.cities.map((item,index)=>{
                  return (
                    <option key={index} value={item.value}>{item.name}</option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <label htmlFor="">描述</label>
            <textarea onChange={this.handleChange} name='desc' value={user.desc} id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    );
  }
}