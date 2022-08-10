import { Input, Button } from 'antd';
import React, { Fragment } from 'react';
import { createAddAction, createChangeInputTextAction } from '../../store/actions';
import { TodoListState } from '../../store/reducers';
import { store } from '../../store/store';

interface MyProps {
  propName?: string;
}

export default class Header extends React.Component<MyProps, TodoListState> {
  constructor(props: MyProps) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleSaveState);
  }

  handleSaveState = () => {
    this.setState(store.getState());
  };

  handleChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const action = createChangeInputTextAction(event.target.value);
    store.dispatch(action);
  };

  handleAddTodo = () => {
    const action = createAddAction(this.state.inputText!);
    store.dispatch(action);
  };

  handleEnterInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.handleAddTodo();
    }
  };

  render() {
    return (
      <Fragment>
        <Input
          style={{ width: '300px' }}
          placeholder="Enter todo text"
          value={this.state.inputText}
          onChange={(event) => {
            this.handleChangeInputText(event);
          }}
          onKeyUp={this.handleEnterInput}
        ></Input>
        <Button style={{ marginLeft: '10px' }} type="primary" onClick={this.handleAddTodo}>
          提交
        </Button>
      </Fragment>
    );
  }
}
