import React from 'react';
import style from '../css/MyInfo.css';

export default class MyInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:'zhangsan',
        age:18,
        gender:'男'
      }
    };
  }

  render(){
    const {userInfo} = this.state;
    return (
      <div className={style['my-info']}>
        {/* <h3 className={style.title + ' gcss'}>name:{userInfo.name}</h3> */}
        <h3 className={[style.title,'gcss'].join(' ')}>name:{userInfo.name}</h3>
        <p>age:{userInfo.age}</p>
        <p className="gcss">gender:{userInfo.gender}</p>
      </div>
    );
  }
  
}