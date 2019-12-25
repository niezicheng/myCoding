import React, { Component } from 'react';
import { Divider,Row, Col } from 'antd';

export class AgentDetails extends Component {

  
  render() {
    const { record } = this.props;
    return (
      <div style={{ color:'black' }}>
        <div style={{ marginBottom:10 }}>推广员详情</div>
        <div>【基本信息】</div>
        {/* {JSON.stringify(record)} */}
        <Row>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>推广员ID：{record.id}</div>
            <div style={{ lineHeight:2 }}>QQ号：{record.qq}</div>
            <div style={{ lineHeight:2 }}>微信号：{record.wxid}</div>
            <div style={{ lineHeight:2 }}>上次登录时间：{record.lastLoginTime}</div>
            <div style={{ lineHeight:2 }}>备注：{record.comment}</div>    
          </Col>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>用户名：{record.username}</div>
            <div style={{ lineHeight:2 }}>手机号：{record.telephone}</div>
            <div style={{ lineHeight:2 }}>注册时间：{record.registerTime}</div>
            <div style={{ lineHeight:2 }}>状态：{record.status}</div>
          </Col>
        </Row>
         <Divider />
      </div>
    );
  }
}

export default AgentDetails;
