import React from 'react';
import Item from './Item';
import { Todo } from '../interface/Todo';

interface ListProps {
  todoList: Todo[];
  changeTodoDone: (id: string, done: boolean) => void;
  changeTodoOnMouse: (id: string, onMouse: boolean) => void;
  delTodo: (id: string) => void;
}

const List = ({ todoList, changeTodoOnMouse, changeTodoDone, delTodo }: ListProps): JSX.Element => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <Item
            key={todo.id}
            todo={todo}
            changeTodoDone={changeTodoDone}
            changeTodoOnMouse={changeTodoOnMouse}
            delTodo={delTodo}
          ></Item>
        );
      })}
    </ul>
  );
};

export default List;
