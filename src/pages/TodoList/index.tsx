import { Button, Input, List } from "antd";
import React, { Fragment } from "react";
import store from '../../store'

interface MyProps {
  propName?: string;
}

interface MyState {
  stateName?: string;
}

export default class TodoList extends React.Component<MyProps, MyState> {
  constructor(props: MyProps){
    super(props)
  }
    
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input placeholder="Enter todo" style={{ width: "300px", marginRight: "10px" }}></Input>
          <Button type="primary">添加</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            bordered
            dataSource={store.getState().todoList}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }
}
