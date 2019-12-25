import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;

export class Forms extends Component {

  render() {
    const plainOptions = ['商家', '推广员'];
    const { getFieldDecorator } = this.props.form;

    getFieldDecorator('id');
    getFieldDecorator('status');

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your title!' }],
          })(
            <Input placeholder="标题" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('receiver', {
            rules: [{ required: true, message: 'Please input your receiver!' }],
          })(
             <Checkbox.Group options={plainOptions} />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: 'Please input your content!' }],
          })(
            <TextArea  placeholder="请输入内容" autosize={{ minRows: 2, maxRows: 6 }}/>
          )}
        </Form.Item>
      </Form>
    );
  }
}
const mapPropsToFields = (props)=>{
  // console.log(props,'0000000000');
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
