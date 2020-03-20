import React, {Component} from 'react';
import { Input, Button } from 'antd';

import store from './store';

import 'antd/dist/antd.css';

class SecondTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div style={{margin:'10px 0 10px 10px'}}>
        <Input placeholder="请输入内容" 
          style={{width:'300px',marginRight:'10px'}} 
          value={this.state.inputValue}
        />
        <Button type="primary">提交</Button>
      </div>
    )
  }
}

export default SecondTodoList;
