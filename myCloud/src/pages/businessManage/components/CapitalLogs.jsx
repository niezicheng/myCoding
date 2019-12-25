import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import formatDate from '@/utils/formatData';

export class CapitalLogs extends Component {
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
        title: '变动时间',
        dataIndex: 'orderId',
        align:'center',
        render:(text)=>{{formatDate(text)}}
      },
      {
        title: '变动账户',
        dataIndex: 'taskId',
        align:'center',
      },
      {
        title: '变动金额',
        dataIndex: 'businesId',
        align:'center',
      },
      {
        title: '账户余额',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '任务ID',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '订单ID',
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
        <div style={{ color:'black',marginBottom:20 }}>资金日志</div>
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

export default connect(state=>state)(CapitalLogs);
