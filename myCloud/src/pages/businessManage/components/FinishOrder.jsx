import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';
import formatDate from '@/utils/formatData';

export class FinishOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        page:0,
        pageSize:10,
        businesId:this.props.record.id,
        status:'已完成',
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
        title: '任务类型',
        dataIndex: 'taskTypeId',
        align:'center',
      },
      {
        title: '商品名称',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '接单时间',
        dataIndex: 'address',
        align:'center',
        render:(text)=>{{formatDate(text)}}
      },
      {
        title: '完成时间',
        dataIndex: 'age',
        align:'center',
        render:(text)=>{{formatDate(text)}}
      },
      {
        title: '接单账号',
        dataIndex: 'address',
        align:'center',
      },
      {
        title: '商品押金',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '用户付款',
        dataIndex: 'address',
        align:'center',
      },
      {
        title: '商品返款',
        dataIndex: 'age',
        align:'center',
      },
      {
        title: '电商订单号',
        dataIndex: 'address',
        align:'center',
      },
    ];

    return (
      <div style={{ color:'black' }}>
        {/* {JSON.stringify(this.props.order)} */}
        <div style={{ color:'black',marginBottom:20 }}>已完成订单</div>
        <Table size="small" 
          scroll={{ x:1300 }}
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

export default connect(state=>state)(FinishOrder);
