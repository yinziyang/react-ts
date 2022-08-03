import React from 'react';
import { Todo } from '../interface/Todo';

interface ItemProps {
  todo: Todo;
  changeTodoDone: (id: string, done: boolean) => void;
  changeTodoOnMouse: (id: string, onMouse: boolean) => void;
  delTodo: (id: string) => void;
}

const Item = ({ todo, changeTodoDone, changeTodoOnMouse, delTodo }: ItemProps): JSX.Element => {
  const { id, onMouse, done, text } = todo;

  const handleChangeTodoDone = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTodoDone(id, event.target.checked);
  };

  const handleChangeTodoOnMouse = (onMouse: boolean) => {
    changeTodoOnMouse(id, onMouse);
  };

  const handleDelTodo = () => {
    delTodo(id);
  };

  return (
    <li
      onMouseOver={() => handleChangeTodoOnMouse(true)}
      onMouseOut={() => handleChangeTodoOnMouse(false)}
      style={{ background: onMouse ? 'gray' : '' }}
    >
      <input type="checkbox" checked={done ? true : false} onChange={(event) => handleChangeTodoDone(event)}></input>
      &nbsp;&nbsp;&nbsp;&nbsp;
      {text}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleDelTodo} style={{ display: onMouse ? '' : 'none' }}>
        删除
      </button>
    </li>
  );
};

export default Item;
