import { Button, Input, List } from "antd";
import React, { Fragment } from "react";

interface MyProps {
  propName?: string;
}

interface MyState {
  stateName?: string;
}

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default class TodoList extends React.Component<MyProps, MyState> {
  render() {
    return (
      <Fragment>
        <div style={{ marginTop: "10px", marginLeft: "10px" }}>
          <Input placeholder="Enter todo" style={{ width: "300px", marginRight: "10px" }}></Input>
          <Button type="primary">添加</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </Fragment>
    );
  }
}
