import { Input, Button } from 'antd';
import React, { Fragment } from 'react';

interface MyProps {
  inputText: string;
  handleChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

export default class Header extends React.Component<MyProps> {
  handleEnterInput = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.props.handleAddTodo();
    }
  };

  render() {
    return (
      <Fragment>
        <Input
          style={{ width: '300px' }}
          placeholder='Enter todo text'
          value={this.props.inputText}
          onChange={(event) => {
            this.props.handleChangeInputText(event);
          }}
          onKeyUp={this.handleEnterInput}
        ></Input>
        <Button
          style={{ marginLeft: '10px' }}
          type='primary'
          onClick={this.props.handleAddTodo}
        >
          提交
        </Button>
      </Fragment>
    );
  }
}
