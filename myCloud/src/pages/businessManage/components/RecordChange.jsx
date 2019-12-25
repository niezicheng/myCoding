import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

export class RecordChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        page:0,
        pageSize:10,
        businesId:this.props.record.id,
      }
    }
  }
  
  // 组件已挂载事件
  componentDidMount(){

    this.props.dispatch({
      type:'rechange/fetchLoadRechange',
      payload:this.state.form
    });
  }


  //数据页面跳转
  changePage = (page,pageSize)=>{

  }
  render() {
    const { rechangeData } = this.props.rechange;
    const { total } = this.props.rechange;

    const columns = [
      {
        title: '充值ID',
        dataIndex: 'orderId',
        align:'center',
      },
      {
        title: '充值金额',
        dataIndex: 'taskId',
        align:'center',
      },
      {
        title: '收款银行',
        dataIndex: 'businesId',
        align:'center',
      },
      {
        title: '充值时间',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '审核时间',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '备注',
        dataIndex: 'address',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.order)} */}
        <div style={{ color:'black',marginBottom:20 }}>充值记录</div>
        <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={rechangeData} 
          pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:this.state.pageSize,
            onChange:this.changePage
          }}
          />
      </div>
    );
  }
}

export default connect(state=>state)(RecordChange);
