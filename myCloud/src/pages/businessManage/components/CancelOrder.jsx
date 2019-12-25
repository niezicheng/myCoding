import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import formatDate  from '@/utils/formatData';

export class CancelOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        page:0,
        pageSize:10,
        businesId:this.props.record.id,
        status:'已撤销',
      }
    }
  }
  
  // 组件已挂载事件
  componentDidMount(){

    this.props.dispatch({
      type:'order/fetchLoadOrder',
      payload:this.state.form
    });
  }


  //数据页面跳转
  changePage = (page,pageSize)=>{

  }
  render() {
    const { orderData } = this.props.order;
    const { total } = this.props.order;

    const columns = [
      {
        title: '订单ID',
        dataIndex: 'orderId',
        align:'center',
      },
      {
        title: '任务ID',
        dataIndex: 'taskId',
        align:'center',
      },
      {
        title: '商家名称',
        dataIndex: 'businesId',
        align:'center',
      },
      {
        title: '接单时间',
        dataIndex: 'taskTypeId',
        align:'center',
        render:(text)=>{{formatDate(text)}}
      },
      {
        title: '接单账号',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '商家押金',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '撤销时间',
        dataIndex: 'address',
        align:'center',
        render:(text)=>{{formatDate(text)}}
      },
      {
        title: '撤销原因',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '撤销人',
        dataIndex: 'address',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.order)} */}
        <div style={{ color:'black',marginBottom:20 }}>已撤销订单</div>
        <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={orderData} 
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

export default connect(state=>state)(CancelOrder);
