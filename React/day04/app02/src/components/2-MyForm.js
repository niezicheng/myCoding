import React,{Component} from 'react';

class MyForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hobby:[{
        value:'swimming',
        name:'游泳'
      },{
        value:'dance',
        name:'跳舞'
      },{
        value:'eatting',
        name:'吃'
      },{
        value:'singing',
        name:'唱歌'
      }],
      form:{
        //哟用户选中的复选框的数据
        hobbies:['swimming','eatting'],
        msg:'msg'
      }
    };
  }
  
  checkboxChange = (e)=>{
    // console.log(1);
    //如果数组中没有它的值，添加；如果有，删除
    let value = e.target.value;
    //state中的数组或对象修改时不要在原值上进行修改
    let hobbies = [...this.state.form.hobbies];
    if(hobbies.includes(value)){
      //移除
      let index = hobbies.indexOf(value);
      hobbies.splice(index,1);
    }else{
      hobbies.push(value);
    }
    this.setState({
      //对对象进行扩展在进行值更新
      form:{...this.state.form,hobbies},
      // form:{hobbies}
    },()=>{
      console.log(this.state.form.hobbies);
      // console.log(this.state.form);
    });
  }
  render(){
    const {form} = this.state;
    return (
      <div className='MyForm'>
        <form action="">
          爱好：
          {
            this.state.hobby.map((item,index)=>{
              return(
              <label key={index} htmlFor={item.value}>
                <input checked={form.hobbies.includes(item.value)} onChange={this.checkboxChange} id={item.value} type="checkbox" value={item.value} />{item.name}
              </label>
              )
            })
          }
        </form>
      </div>
    );
  }
}

export default MyForm;