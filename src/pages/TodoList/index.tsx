import React from 'react';
import Header from '../../components/Header';
import Items from '../../components/Items';
import { store } from '../../store/store';
import { TodoListState } from '../../store/reducers';
import {
  createDelAction,
  createOnMouseAction,
  createAddAction,
  createChangeInputTextAction,
} from '../../store/actions';

interface MyProps {
  propName?: string;
}

export default class TodoList extends React.Component<MyProps, TodoListState> {
  // state: MyState = { stateName: 'stateName' };
  constructor(props: MyProps) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleSaveState);
  }

  handleSaveState = () => {
    this.setState(store.getState());
  };

  handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const action = createChangeInputTextAction(e.target.value);
    store.dispatch(action);
  };

  handleAddTodo = () => {
    const action = createAddAction(this.state.inputText!);
    store.dispatch(action);
  };

  handleDelTodo = (id: string) => {
    store.dispatch(createDelAction(id));
  };

  handleOnMouse = (id: string, onMouse: boolean) => {
    store.dispatch(createOnMouseAction(id, onMouse));
  };

  render() {
    return (
      <div>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Header
            inputText={this.state.inputText!}
            handleChangeInputText={this.handleChangeInputText}
            handleAddTodo={this.handleAddTodo}
          ></Header>
        </div>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Items
            todoList={this.state.todoList}
            handleDelTodo={this.handleDelTodo}
            handleOnMouse={this.handleOnMouse}
          ></Items>
        </div>
      </div>
    );
  }
}
