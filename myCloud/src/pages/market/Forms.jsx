import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

export class Forms extends Component {

  render() {
    const plainOptions = ['正常', '停用'];
    const { getFieldDecorator } = this.props.form;

    getFieldDecorator('id');

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input placeholder="用户名" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('wxid', {
            rules: [{ required: true, message: 'Please input your wxid!' }],
          })(
            <Input placeholder="微信号" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('telephone', {
            rules: [{ required: true, message: 'Please input your telephone!' }],
          })(
            <Input placeholder="手机号" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('qq', {
            rules: [{ required: true, message: 'Please input your qq!' }],
          })(
            <Input placeholder="QQ" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input type='password' placeholder="登录密码" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('ratio', {
            rules: [{ required: true, message: 'Please input your ratio!' }],
          })(
            <Input placeholder="抽成比例" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('comment', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <TextArea  placeholder="请输入内容" autosize={{ minRows: 2, maxRows: 6 }}/>
          )}
        </Form.Item>
      </Form>
    );
  }
}

const mapPropsToFields = (props)=>{
  console.log(props,'0000000000');
  let record =  props.record;
  let obj = {};
  for(let key in record){
    obj[key] = Form.createFormField({
          value: record[key],
        })
  }
  return obj;
}

export default Form.create({mapPropsToFields})(Forms);
