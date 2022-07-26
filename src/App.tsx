import React, { Fragment } from 'react';
import TodoList from './components/TodoList';

export default function App(): React.ReactElement {
  return (
    <Fragment>
      <TodoList></TodoList>
    </Fragment>
  );
}
