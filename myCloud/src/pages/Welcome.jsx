import React, { Component } from 'react';
import styles from './welcome.less';
import { Row, Col, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export class Welcome extends Component {

  changeDate = (date, dateString)=>{
    // console.log(date, dateString);
  }
  
  render() {
    return (
      <div className={styles.content}>
        <Row gutter={16}>
          <Col className="" span={6}>
            <div className={styles.content_top_item} style={{  backgroundColor:'#27A9E3' }}>
              <div>今日放单商家数：320家</div>
              <div>今日注册商家数：30家</div>
              <div>总注册商家数：35家</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className={styles.content_top_item} style={{  backgroundColor:'#28B779' }}>
              <div>今日放单量：320家</div>
              <div>进行中刷单：30家</div>
              <div>待接订单量：35家</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className={styles.content_top_item} style={{  backgroundColor:'#FFB748' }}>
              <div>总注册推广员：320人</div>
              <div>总推广订单：30单</div>
              <div>总推广提成：35</div>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className={styles.content_top_item} style={{  backgroundColor:'#2255A4' }}>
              <div>今日收入：320元</div>
              <div>待结算收入：30元</div>
              <div>累计结算收入：35元</div>
            </div>
          </Col>
        </Row>
        <div className={styles.content_time}>
          <RangePicker onChange={this.changeDate} style={{ width:300,paddingLeft:0 }} />
          <span style={{  backgroundColor:'#27A9E3' }}>本天</span>
          <span style={{  backgroundColor:'#28B779' }}>本月</span>
          <span style={{  backgroundColor:'#2255A4' }}>本年</span>
        </div>
      </div>
    );
  }
}

export default Welcome;

