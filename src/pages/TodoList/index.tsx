import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Items from '../../components/Items';
import { store } from '../../store/store';
import { TodoListState } from '../../store/reducers';

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

  render() {
    return (
      <div>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Header></Header>
        </div>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          <Items></Items>
        </div>
      </div>
    );
  }
}
