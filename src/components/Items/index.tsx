import React, { Fragment } from 'react';
import { Button, List } from 'antd';
import { TodoListState } from '../../store/reducers';
import { store } from '../../store/store';
import { createDelAction, createOnMouseAction } from '../../store/actions';

interface MyProps {
  propName?: string;
}

export default class Items extends React.Component<MyProps, TodoListState> {
  constructor(props: MyProps) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleSaveState);
  }

  handleSaveState = () => {
    this.setState(store.getState());
  };

  handleDelTodo = (id: string) => {
    store.dispatch(createDelAction(id));
  };

  handleOnMouse = (id: string, onMouse: boolean) => {
    store.dispatch(createOnMouseAction(id, onMouse));
  };

  render() {
    return (
      <Fragment>
        <List
          size="large"
          style={{ width: '300px' }}
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.todoList}
          renderItem={(item) => (
            <List.Item
              onMouseOver={() => this.handleOnMouse(item.id, true)}
              onMouseLeave={() => this.handleOnMouse(item.id, false)}
            >
              {item.text}
              <Button
                type="primary"
                danger
                size="small"
                onClick={() => this.handleDelTodo(item.id)}
                style={{ marginLeft: '10px', display: item.onMouse ? '' : 'none' }}
              >
                删除
              </Button>
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}
