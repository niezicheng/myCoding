import React from 'react';
import styles from './newsCenter.less';
import { DatePicker,Input,Button,Table,Select,Modal,Icon } from 'antd';
import { connect } from 'dva';
import formatData from '@/utils/formatData';
import Forms from './Forms';

const { RangePicker } = DatePicker;
const { Option } = Select;

class NewsCenter extends React.Component {
  //构造函数
	constructor(props){
		super(props)
		this.state={
      visible: false,
      record:[],
      modalTitle:'',
      form:{
        page:0,
        pageSize:10,
        // userId:+this.props.match.params.id,
        siteId:2,
      }
		}
  }
  
  //组件挂载周期函数
  componentDidMount(){
    // console.log(+this.props.match.params.id);
    //获取详细日志数据信息【connect连接才能获取到props.dispatch】
    // console.log(this.props.dispatch,'=======');
    this.props.dispatch({
        type:'newsCenter/fetchLoadNewsCenter',
        payload:this.state.form,
      });

  }

  //搜索按钮【查询显示符合条件的logs数据信息】
  search = ()=>{
    console.log(this.state.form);
    this.props.dispatch({
      type:'newsCenter/fetchLoadNewsCenter',
      payload:this.state.form,
    });
  }

  //Input框数据双向绑定事件
  changeInput = (attrName,e)=>{
    this.setState({
      form:{
        ...this.state.form,
       [attrName]:e.target.value === undefined?'':e.target.value,
      }
    })
  }

  //分页页面改变事件
  changePage =(page,pageSize)=>{
    //更新组件中的state数据,在更新回调函数中分发action
    this.setState({
      form:{
        ...this.state.form,
        page:page-1,
        pageSize,
      }
    },()=>{
      this.props.dispatch({
        type:'newsCenter/fetchLoadNewsCenter',
        payload:this.state.form,
      });
    })
  
  }

  //日期选择框改变事件
  ChangeDate = (date, dateString)=>{
    // console.log(date, dateString,'111111111');
    // console.log(dateString[0] == false);
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

  //select下拉框改变事件
  changeSelect = (attrName,value)=>{
    console.log(attrName,value);
    if(attrName === 'status' && value){
      this.setState({
        form:{
          ...this.state.form,
          [attrName]:value === undefined?'':value,
        }
      })
    }else{
      //删除state中form的status属性
      delete this.state.form.status;
    }
  }

  //添加按钮弹出模态框
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
    record.receiver = record.receiver.split(',');
    this.setState({
      record,
      modalTitle:'编辑信息',
      visible: true,
    });
  }

  //模态框确定按钮
  handleOk = e => {
    e.preventDefault();
    this.form.validateFields((err, value) => {
      if (!err) {
        // console.log('Received values of form: ', value);
        let values = {...value,receiver:value.receiver.toString(),siteId:2}
        // console.log(values); 
        this.props.dispatch({
          type:'newsCenter/fetchAddOrUpdateNews',
          payload:{
            values:values,
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
  
  //获取导入表单组件中的form属性值
  getForm = (form)=>{
    this.form = form;
  }

  //改变发布状态
  changeState = (record)=>{
    if(record.status === '已发布'){
      record.status = '未发布';
    }else{
      record.status = '已发布';
    }
    //更新数据信息
    this.props.dispatch({
      type:'newsCenter/fetchAddOrUpdateNews',
      payload:{
        values:record,
        page:this.state.form,
      }
    })
  }
  
  //删除数据
  deleteData = (record)=>{
    this.props.dispatch({
      type:'newsCenter/fetchDeleteNews',
      payload:{
        param:{id:record.id},
        page:this.state.form
      }
    })
  }


	render(){
    const { newsCenterData } = this.props.newsCenter;
    const { total } = this.props.newsCenter;
    const { form } = this.state;

    const columns = [
      {
        title: '公告标题',
        dataIndex: 'title',
      },
      {
        title: '通知人群',
        dataIndex: 'receiver',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        render:(text)=>{ 
          return (
            <div>{formatData(text)}</div>
          )
        }
      },
      {
        title: '发布时间',
        dataIndex: 'checkTime',
        render:(text)=>{ 
          return (
            <div>{formatData(text)}</div>
          )
        }
      },
      {
        title: '操作',
        dataIndex: '',
        render:(text,record)=>{
          if(record.status === '已发布'){
            return (
              <div>
                <Icon type="diff" title='编辑' style={{ color:'green' }} onClick={this.editData.bind(this,record)} />
                <Icon type="close-circle" title='取消发布' style={{margin:'0 5px',color:'red',}} onClick={this.changeState.bind(this,record)} />
                <Icon type="delete" style={{ color:'red', }} title='删除' onClick={this.deleteData.bind(this,record)} />
              </div>
            )
          }else{
            return (
              <div>
                <Icon type="diff" title='编辑' style={{ color:'green' }} onClick={this.editData.bind(this,record)} />
                <Icon type="check-circle" title='发布' style={{margin:'0 5px',color:'green',}} onClick={this.changeState.bind(this,record)} />
                <Icon type="delete" style={{ color:'red', }} title='删除' onClick={this.deleteData.bind(this,record)} />
              </div>
            )
          }
          
        }
      },
    ];

		return(
			<div className={ styles.content }>
        <div className={ styles.content_title }>
          日志中心
        </div>
        <div className={ styles.content_search }>
          <div className={ styles.content_search_left }>
            <Button type='primary' onClick={this.addData}>新增</Button>
          </div>
          <div className={ styles.content_search_right }>
            <RangePicker onChange={this.ChangeDate} style={{ marginRight: 10 }} />
            <Select allowClear defaultValue='通知人群' style={{ width: 110,marginRight: 10 }} onChange={this.changeSelect.bind(this,'receiver')} >
              <Option value="分站">分站</Option>
              <Option value="买手">买手</Option>
              <Option value="商家">商家</Option>
              <Option value="推广员">推广员</Option>
            </Select>
            <Select allowClear defaultValue='状态' style={{ width: 110,marginRight: 10 }} onChange={this.changeSelect.bind(this,'status')} >
              <Option value="未发布">未发布</Option>
              <Option value="已发布">已发布</Option>
            </Select>
            <Input placeholder='公告标题' type="text" onChange={this.changeInput.bind(this,'title')}/>
            <Button type='primary' onClick={this.search}>搜索</Button>
          </div>
        </div>
        <div className={styles.content_content}>
          <Table 
          rowKey='id' 
          pagination={{
            pageSize:form.pageSize,
            total,
            showTotal:total => `共 ${total} 条`,
            onChange:this.changePage,
          }} 
          columns={columns} 
          dataSource={newsCenterData} 
          size='small'
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
export default connect(state=>state)(NewsCenter);
// export default Logs;