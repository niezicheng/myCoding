import React from 'react';
import styles from './market.less';
import { Button,Input,Select,Table,Icon,Modal } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import Forms from './Forms';

const { Option } = Select;

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      record:[],
      modalTitle:'',
      form:{
        siteId:2,
        page:0,
        pageSize:10,
        // roleId:3
      }
    }
  }

  //页面挂载完毕周期函数
  componentDidMount(){
    //分发异步请求action获取数据信息
    // console.log(this.props.dispatch);
    this.props.dispatch({
      type:'market/fetchLoadMarket',
      payload:this.state.form,
    })
  }

  //页面改变时事件
  changePage = (page,pageSize)=>{
    this.setState({
      form:{
        ...this.state.form,
        page:page-1,
        pageSize,
      }
    },()=>{
      this.props.dispatch({
        type:'market/fetchLoadMarket',
        payload:this.state.form,
      })
    })
  }

  //input输入框改变事件
  changeInput = (attrName,e)=>{
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:e.target.value,
      }
    })
  }

  //搜索按钮点击事件获取相应信息查询
  search = ()=>{
    this.props.dispatch({
      type:'market/fetchLoadMarket',
      payload:this.state.form,
    })
  }

  //点击表格商家id跳转到详细页面
  toMarketDetails = (record)=>{
    this.props.dispatch({
      type:'market/changeRecord',
      payload:record,
    })
    router.push('/marketDetails/'+record.id)
  }

  //删除信息
  deleteData = (record)=>{
    this.props.dispatch({
      type:'',
      payload:{
        params:{id:record.id},
        pages:this.state.form
      }
    })
  }

  //模态框确定按钮
  handleOk = e => {
    e.preventDefault();
    this.form.validateFields((err, value) => {
      if (!err) {
        console.log('Received values of form: ', value);
        // let values = {...value,receiver:value.receiver.toString(),siteId:2}
        // // console.log(values); 
        this.props.dispatch({
          type:'staff/fetchAddOrUpdateData',
          payload:{
            values:value,
            page:this.state.form,
          }
        })

      }
    });
    this.setState({
      visible: false,
    });
  };

  //模态框取消按钮
  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  //获取表单form
  getForm = (form)=>{
    this.form = form;
  }

  //添加数据
  addData = ()=>{
    this.setState({
      record:[],
      modalTitle:'添加信息',
      visible: true,
    });
  }

   //修改单项数据
   editData = (record)=>{
    console.log(record);
    // record.receiver = record.receiver.split(',');
    this.setState({
      record,
      modalTitle:'编辑信息',
      visible: true,
    });
  }

  render(){
    const { form } = this.state;
    const { marketData } = this.props.market;
    const { total } = this.props.market;

    const columns = [
      {
        title: '推广员ID',
        width: 70,
        align:'center',
        dataIndex: 'id',
        fixed: 'left',
        render:(text,record)=>{
          return (
            <a onClick={this.toMarketDetails.bind(this,record)}>{text}</a>
          );
        }
      },
      { title: '用户名',align:'center', dataIndex: 'username' },
      { title: '手机号',align:'center', dataIndex: 'telephone' },
      { title: 'QQ号',align:'center', dataIndex: 'qq' },
      { title: '微信',align:'center', dataIndex: 'wxid' },
      { title: '推广商家数',align:'center', dataIndex: 'allBusinesNum' },
      { title: '账户余额',align:'center', dataIndex: 'accountCommission' },
      { title: '累计分成金额',align:'center', dataIndex: 'totalDeposits' },
      { title: '订单分成比例',align:'center', dataIndex: 'ratio' },
      { title: '上次登录时间',align:'center', dataIndex: 'lastLoginTime' },
      { 
        title: '状态',
        align:'center', 
        dataIndex: 'enabled',
        render:(text,record)=>{
          if(record.enabled){
            return (
              <div>正常</div>
            )
          }else{
            return (
              <div>停用</div>
            )
          }
        }
       },
      { title: '备注',align:'center', dataIndex: 'comment' },
      {
        title: '操作',
        align:'center',
        fixed: 'right',
        width: 100,
        render: (text,record)=>{
          return (
            <div>
              <Icon type="diff" onClick={this.editData.bind(this,record)} style={{ color:'green',marginRight:5 }} />
              <Icon type="delete" style={{ color:'red' }} onClick={this.deleteData.bind(this,record)} />
            </div>
          );
        },
      },
    ];
  
    return (
      <div className={styles.content}>
        {/* {JSON.stringify(MarketData)} */}
        <div className={styles.content_title}>
          商户管理
        </div>
        <div className={styles.content_search}>
          <div className={styles.content_search_left}>
            <Button type='primary' onClick={this.addData} style={{ marginRight:10 }}>新增</Button>
            <Button type='primary'>导出</Button>
          </div>
          <div className={styles.content_search_right}>
            <Input placeholder='推广员ID' type="text" onChange={this.changeInput.bind(this,'id')} />
            <Input placeholder='手机号' type="text" onChange={this.changeInput.bind(this,'telephone')} />
            <Input placeholder='用户名' type="text" onChange={this.changeInput.bind(this,'username')} />
            <Input placeholder='QQ' type="text" onChange={this.changeInput.bind(this,'qq')} />
            <Input placeholder='微信' type="text" onChange={this.changeInput.bind(this,'wxid')} />
            <Button type='primary' style={{ marginTop:10 }} onClick={this.search}>搜索</Button>
          </div>
        </div>
        <div className={styles.content_content}>
          <Table 
          bordered
          size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={marketData} 
          scroll={{ x: 1300 }}
          pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:form.pageSize,
            onChange:this.changePage,
          }}
          />
        </div>
        {/* 模态框 */}
        <Modal
          title={this.state.modalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText='取消'
          okText='确认'
        >
         <Forms record={this.state.record} ref={this.getForm}></Forms>
        </Modal>
      </div>
    )
  }
}

export default connect(state=>state)(Market);