import React from 'react';
import styles from './shopManage.less';
import { Button,DatePicker,Input,Select,Table } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

const { RangePicker } = DatePicker;
const { Option } = Select;

class ShopManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form:{
        siteId:2,
        page:0,
        pageSize:6,
      }
    }
  }

  //页面挂载完毕周期函数
  componentDidMount(){
    //分发异步请求action获取数据信息
    // console.log(this.props.dispatch);
    this.props.dispatch({
      type:'shopManage/fetchLoadShopManage',
      payload:this.state.form,
    })
  }
  
  //日历选择框改变事件
  changeData = (date, dateString)=>{
    // console.log(date, dateString);
    if(dateString[0] && dateString[1]){
      let beginTime = new Date(dateString[0]).getTime();
      let endTime = new Date(dateString[1]).getTime();
      // console.log(beginTime,endTime,'===');
      this.setState({
        form:{
          ...this.state.form,
          beginTime,
          endTime,
        }
      })
    }else{
      //清除state的form中的开始和结束时间
      this.setState({
        form:{
          ...this.state.form,
          beginTime:'',
          endTime:'',
        }
      })
    }
  }

  //Select下拉框改变事件
  handleChange = (attrName,value)=>{
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:value,
      }
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
        type:'shopManage/fetchLoadShopManage',
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
      type:'shopManage/fetchLoadShopManage',
      payload:this.state.form,
    })
  }

  //点击表格商家id跳转到详细页面
  toShopDetails = (record)=>{
    this.props.dispatch({
      type:'shopManage/changeRecord',
      payload:record,
    })
    router.push('/shopDetails/'+record.id)
  }

  render(){
    const { form } = this.state;
    const { shopManageData } = this.props.shopManage;
    const { total } = this.props.shopManage;

    const columns = [
      {
        title: '店铺ID',
        width: 70,
        align:'center',
        dataIndex: 'id',
        fixed: 'left',
        render:(text,record)=>{
          return (
            <a onClick={this.toShopDetails.bind(this,record)}>{text}</a>
          );
        }
      },
      { 
        title: '商家ID',
        align:'center', 
        dataIndex: 'telephone',
        fixed: 'left',
      },
      { 
        title: '商家手机号',
        align:'center', 
        dataIndex: 'qq',
        fixed: 'left',
      },
      { title: '店铺名称',align:'center', dataIndex: 'accountBj' },
      { title: '店铺旺旺ID',align:'center', dataIndex: 'accountYj' },
      { title: '所属平台',align:'center', dataIndex: 'allRechargeCount' },
      { title: '接单间隔时间',align:'center', dataIndex: 'ShopifuId' },
      { title: '注册时间',align:'center', dataIndex: 'registerTime' },
      { title: '店铺状态',align:'center', dataIndex: 'rank' },
      {
        title: '操作',
        align:'center',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
      },
    ];
  
    return (
      <div className={styles.content}>
        {/* {JSON.stringify(ShopManageData)} */}
        <div className={styles.content_title}>
          商户管理
        </div>
        <div className={styles.content_search}>
          <div className={styles.content_search_left}>
            <Button type='primary'>导出</Button>
          </div>
          <div className={styles.content_search_right}>
            <RangePicker onChange={this.changeData} style={{ marginRight:8 }} />
            <Select allowClear defaultValue="所属平台" style={{ width: 150,marginRight: 10 }} onChange={this.handleChange.bind(this,'rank')}>
              <Option value="天猫">天猫</Option>
            </Select>
            <Input placeholder='商家ID' type="text" onChange={this.changeInput.bind(this,'id')} />
            <Select allowClear defaultValue="店铺状态" style={{ width: 150,marginRight: 10 }} onChange={this.handleChange.bind(this,'siteId')}>
              <Option value="待审核">待审核</Option>
              <Option value="审核通过">审核通过</Option>
              <Option value="审核未通过">审核未通过</Option>
            </Select>
            <Button type='primary' style={{ marginTop:10 }} onClick={this.search}>搜索</Button>
          </div>
        </div>
        <div className={styles.content_content}>
          <Table size="small" 
          rowKey='id'
          columns={columns} 
          dataSource={shopManageData} 
          scroll={{ x: 950 }}
          pagination={{
            total,
            showTotal:total => `共 ${total} 条`,
            pageSize:form.pageSize,
            onChange:this.changePage,
          }}
          />
        </div>
      </div>
    )
  }
}

export default connect(state=>state)(ShopManage);