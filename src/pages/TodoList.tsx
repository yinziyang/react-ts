import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import { Todo } from '../interface/Todo';
import { nanoid } from 'nanoid';
import Footer from '../components/Footer';

const TodoList = (): JSX.Element => {
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

  const doneAll = (done: boolean) => {
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
      <Footer totalNum={totalNum} doneNum={doneNum} doneAll={doneAll}></Footer>
    </Fragment>
  );
};

export default TodoList;
