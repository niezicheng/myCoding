import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

class Article extends Component {
  render() {
    return (
      <div>
        hello
        {JSON.stringify(this.props.article)}
        <Button onClick={this.props.changeMsg} type='primary'>更改同步数据</Button>
        <Button onClick={this.props.getData} type='primary'>获取异步数据</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMsg: ()=>{
      //分发action,分发到article命名空间底下的action
      dispatch({
        type:'article/changeMsg',
        payload: '111'
      });
    },
    //异步获取后台的数据
    getData: ()=>{
      dispatch({
        type:'article/getData',
        payload:{ page:0,pageSize:10 }
      });
    },
  }
}

export default connect(state=>state,mapDispatchToProps)(Article);