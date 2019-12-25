import React, { Component } from 'react';
import { Modal } from 'antd';

export class addOrUpdModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
  }
  
  render() {
    return (
      <div>
        <Modal
          title="添加数据"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          {/* 放置表单数据 */}

        </Modal>
      </div>
    );
  }
}

export default addOrUpdModal;
