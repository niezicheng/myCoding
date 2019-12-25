import React, { Component } from 'react';
import { Divider,Row, Col } from 'antd';

export class BusDetails extends Component {

  
  render() {
    const { record } = this.props;
    return (
      <div style={{ color:'black' }}>
        <div>【基本信息】</div>
        <Row>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>商家ID：{record.id}</div>
            <div style={{ lineHeight:2 }}>来源：{record.site.domain}</div>
            <div style={{ lineHeight:2 }}>手机号：{record.telephone}</div>
            <div style={{ lineHeight:2 }}>备注：{record.comment}</div>    
          </Col>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>名称：{record.username}</div>
            <div style={{ lineHeight:2 }}>注册时间：{record.registerTime}</div>
            <div style={{ lineHeight:2 }}>状态：{record.status}</div>
          </Col>
        </Row>
         <Divider />
         <div>【账号信息】</div>
        <Row>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>QQ：{record.qq}</div>
            <div style={{ lineHeight:2 }}>本金余额：{record.accountBj}</div>
            <div style={{ lineHeight:2 }}>累计充值：{record.allRechargeCount}</div>
          </Col>
          <Col span={12} style={{ textAlign:'center' }}>
            <div style={{ lineHeight:2 }}>用户等级：{record.id}</div>
            <div style={{ lineHeight:2 }}>佣金余额：{record.accountYj}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BusDetails;
