import React from 'react';
import Item from './Item';
import { Todo } from '../interface/Todo';

interface ListProps {
  todoList: Todo[];
  changeTodoDone: (id: string, done: boolean) => void;
  changeTodoOnMouse: (id: string, onMouse: boolean) => void;
  delTodo: (id: string) => void;
}

export default function List(props: ListProps): React.ReactElement {
  return (
    <ul>
      {props.todoList.map((todo) => {
        return (
          <Item
            key={todo.id}
            todo={todo}
            changeTodoDone={props.changeTodoDone}
            changeTodoOnMouse={props.changeTodoOnMouse}
            delTodo={props.delTodo}
          ></Item>
        );
      })}
    </ul>
  );
}
