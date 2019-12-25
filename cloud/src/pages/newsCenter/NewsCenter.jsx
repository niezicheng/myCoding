import React from 'react';
import styles from './newsCenter.less';
import { DatePicker,Input,Button,Table,Select,Icon,Modal } from 'antd';
import { connect } from 'dva';
import formatDate from '@/utils/formatData';
import NewsForm from './NewsForm';

const { RangePicker } = DatePicker;
const { Option } = Select;

class NewsCenter extends React.Component {
  //构造函数
	constructor(props){
		super(props)
		this.state={
      str:'',
      visible: false,
      singleRecord:{},
      form:{
        siteId:2,
        page:0,
        pageSize:10,
      }
		}
  }
  
  componentDidMount(){
    // console.log(+this.props.match.params.id);
    //获取详细日志数据信息【connect连接才能获取到props.dispatch】
    // console.log(this.props.dispatch,'=======');
    this.props.dispatch({
        type:'newsCenter/fetchLoadNews',
        payload:this.state.form,
      });

  }
  //搜索按钮【查询显示符合条件的logs数据信息】
  search = ()=>{
    this.props.dispatch({
      type:'newsCenter/fetchLoadNews',
      payload:this.state.form,
    });
  }

  //Input框数据双向绑定事件
  changeInput = (attrName,e)=>{
    this.setState({
      form:{
        ...this.state.form,
        [attrName]:e.target.value,
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
        type:'newsCenter/fetchLoadNews',
        payload:this.state.form,
      });
    })
  
  }

  //日期选择框改变事件
  ChangeDate = (date, dateString)=>{
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
      // 清空state中的beginTime和endTime
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

  //删除数据
  toDelete = (record)=>{
    // console.log(record);
    this.props.dispatch({
      type:'newsCenter/fetchDeleteNews',
      payload:{
        parems:{
          id:record.id,
        },
        page:this.state.form,
      },
    })
  }

  //添加数据
  toAdd = () => {
    this.setState({
      visible: true,
    });
  };

  //更新数据
  toUpdate = (record)=>{
    // console.log(record,'tttttttt');
    //将获取的receiver字符串转化为数组
    record.receiver = record.receiver.split(',');
    this.setState({
      str:'修改',
      singleRecord:record,
    })

    this.setState({
      visible: true,
    });
  }

  handleOk = e => {
    e.preventDefault();
    this.newsForm.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        let value = {...values,receiver:values.receiver.toString(),siteId:2,};
        // console.log(value);
        this.props.dispatch({
          type:'newsCenter/fetchAddNews',
          payload:{
            value,
            page:this.state.form,
          }
        })
      }
    });

    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  //获取表单中的form
  getForm = (form)=>{
    this.newsForm = form;
  }

  //改变发布状态
  changeStatus = (record)=>{
    
      if(record.status === '已发布'){
        record.status = '未发布';
      }else{
        record.status = '已发布';
      }
      this.props.dispatch({
        type:'newsCenter/fetchAddNews',
          payload:{
            value:record,
            page:this.state.form,
          }
      })

  }

	render(){
    const { newsData } = this.props.newsCenter;
    const { total } = this.props.newsCenter;
    const { form } = this.state;

    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '通知人群',
        dataIndex: 'receiver',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        render:(text)=>{
          return (
            <div>{formatDate(text)}</div>
          )
        }
      },
      {
        title: '发布时间',
        dataIndex: 'publishTime',
        render:(text)=>{
          return (
            <div>{formatDate(text)}</div>
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
                <Icon type='edit' title='编辑' onClick={this.toUpdate.bind(this,record)} />
                <Icon type='close-circle' title='取消发布' onClick={this.changeStatus.bind(this,record)} />
                <Icon type='delete' title='删除' onClick={this.toDelete.bind(this,record)} />
              </div>
            );
          }else{
            return (
              <div>
                <Icon type='edit' title='编辑' onClick={this.toUpdate.bind(this,record)} />
                <Icon type='check-circle' title='发布' onClick={this.changeStatus.bind(this,record)} />
                <Icon type='delete' title='删除' onClick={this.toDelete.bind(this,record)} />
              </div>
            );
          }
          
        }
      },
    ];

		return(
			<div className={ styles.content }>
        <div className={ styles.content_title }>
          消息管理
        </div>
        <div className={styles.content_addBtn}>
          <Button type='primary' onClick={this.toAdd}>添加</Button>
        </div>
        <div className={ styles.content_search }>
          <RangePicker onChange={this.ChangeDate} />
          <Select allowClear defaultValue="状态" style={{ width: 150,marginLeft:8 }} onChange={this.handleChange.bind(this,'siteId')}>
            <Option value='未发布'>未发布</Option>
            <Option value='已发布'>已发布</Option>
          </Select>
          <Input placeholder='公告标题' type="text" value={form.userId} onChange={this.changeInput.bind(this,'title')}/>
          <Select allowClear defaultValue="通知人群" style={{ width: 150,marginRight:8 }} onChange={this.handleChange.bind(this,'enabled')}>
            <Option value='分站'>分站</Option>
            <Option value='买手'>买手</Option>
            <Option value='商户'>商户</Option>
            <Option value='推官员'>推官员</Option>
          </Select>
          
          <Button type='primary' onClick={this.search}>搜索</Button>
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
          dataSource={newsData} 
          size='small'
          />
        </div>
        <Modal
          title={this.state.str+'消息'}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText = '添加'
          cancelText = '取消'
        >
          <NewsForm singleRecord={this.state.singleRecord} ref={this.getForm}></NewsForm>
        </Modal>
      </div>
			)
	}
}
export default connect(state=>state)(NewsCenter);