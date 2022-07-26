import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import { Todo } from './interface/Todo';
import { nanoid } from 'nanoid';

export default function App(): React.ReactElement {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [totalNum, setTotalNum] = useState(0);
  const [doneNum, setDoneNum] = useState(0);

  const addTodo = (text: string) => {
    const newTodoList = [...todoList];
    const todo: Todo = {
      id: nanoid(),
      text: text,
      done: false,
      onMouse: false,
    };
    newTodoList.unshift(todo);
    setTodoList(newTodoList);
    setTotalNum(totalNum + 1);
  };

  const changeTodoDone = (id: string, done: boolean) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((todo) => {
      if (todo.id === id) {
        todo.done = done;
      }
    });
    setTodoList(newTodoList);
    if (done === true) {
      setDoneNum(doneNum + 1);
    } else {
      setDoneNum(doneNum - 1);
    }
  };

  const changeTodoOnMouse = (id: string, onMouse: boolean) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((todo) => {
      if (todo.id === id) {
        todo.onMouse = onMouse;
      }
    });
    setTodoList(newTodoList);
  };

  const delTodo = (id: string) => {
    const newTodoList = todoList.filter((todo) => {
      if (todo.id !== id) {
        return true;
      } else {
        if (todo.done === true) {
          setDoneNum(doneNum - 1);
        }
        return false;
      }
    });
    setTodoList(newTodoList);
    setTotalNum(totalNum - 1);
  };

  const handleDoneAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const done = event.target.checked;
    if (totalNum !== 0) {
      const newTodoList = [...todoList];
      newTodoList.forEach((todo) => {
        todo.done = done;
      });
      setTodoList(newTodoList);
      if (done === false) {
        setDoneNum(0);
      } else {
        setDoneNum(totalNum);
      }
    }
  };

  return (
    <Fragment>
      <Header addTodo={addTodo} />
      <List
        todoList={todoList}
        changeTodoDone={changeTodoDone}
        changeTodoOnMouse={changeTodoOnMouse}
        delTodo={delTodo}
      />
      <input
        type="checkbox"
        onChange={handleDoneAll}
        checked={totalNum === doneNum && totalNum !== 0 ? true : false}
      ></input>
      共{totalNum}, 已完成:{doneNum}
    </Fragment>
  );
}
