import React, { useState } from 'react';
import { nanoid } from 'nanoid';

// 定义todo的结构
interface todoer {
  id: string;
  todo: string;
  onMouse: boolean;
  checked: boolean;
}

// todo组件
export default function TodoList(): React.ReactElement {

	// 存放的todo列表
  const [todoList, setTodoList] = useState<todoer[]>([]); // 使用<>限制类型

	// 新建的todo
  const [todoText, setTodoText] = useState<string>('');

  // todo总数
  const [totalNum, setTotalNum] = useState<number>(0);

  // 被选中的总数
  const [checkedNum, setCheckedNum] = useState<number>(0);

  // todo输入框的change事件
  const handleChangeTodoText: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoText(event.target.value);
  };

  // 添加todo
  const addTodo = (todoText: string) => {
    const newTodoList = [...todoList];
    const todo: todoer = {
      id: nanoid(),
      todo: todoText,
      onMouse: false,
      checked: false,
    };
    newTodoList.unshift(todo);
    setTodoText('');
    setTodoList(newTodoList);
    setTotalNum(totalNum + 1);
  };

  const handleAddTodo = () => {
    addTodo(todoText);
  };

  const handleMouseTodo = (id: string) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((item) => {
      if (item.id === id) {
        item.onMouse = true;
      } else {
        item.onMouse = false;
      }
    });
    setTodoList(newTodoList);
  };

  const handleDelTodo = (id: string) => {
    const newTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
    setTotalNum(totalNum - 1);
    setCheckedNum(checkedNum - 1);
  };

  const handleEnterTodoText: React.KeyboardEventHandler = (
    event: React.KeyboardEvent
  ) => {
    if (event.key === 'Enter') {
      addTodo(todoText);
    }
  };

  const changeChecked = (id: string, checked: boolean) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((item) => {
      if (id === item.id) {
        item.checked = checked;
      }
    });
    setTodoList(newTodoList);
  };

  const handleChangeChecked = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.target.checked === true
      ? setCheckedNum(checkedNum + 1)
      : setCheckedNum(checkedNum - 1);
    changeChecked(id, event.target.checked);
  };

  const handleCheckedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodoList = [...todoList];
    const checked: boolean = event.target.checked;
    newTodoList.forEach((item) => {
      item.checked = checked;
    });
    setTodoList(newTodoList);
    if (checked === true) {
      setCheckedNum(totalNum);
    } else {
      setCheckedNum(0);
    }
  };

  const handleSortTodo = (id: string) => {
    const newTodoList = [...todoList];
    newTodoList.forEach((item, idx) => {
      if (item.id === id) {
        newTodoList.splice(idx, 1);
        newTodoList.unshift(item);
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <input
        onChange={handleChangeTodoText}
        onKeyDown={handleEnterTodoText}
        type="text"
        placeholder="输入"
        value={todoText}
      />
      <button onClick={handleAddTodo}>提交</button>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              <div
                style={{ background: item.onMouse ? 'gray' : '' }}
                onMouseOver={() => handleMouseTodo(item.id)}
              >
                <input
                  type="checkbox"
                  onChange={(event) => handleChangeChecked(item.id, event)}
                  checked={item.checked}
                />
                {item.todo}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{ display: item.onMouse ? '' : 'none' }}
                  onClick={() => handleDelTodo(item.id)}
                >
                  删除
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  style={{ display: item.onMouse ? '' : 'none' }}
                  onClick={() => handleSortTodo(item.id)}
                >
                  排到最前面
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <input
        type="checkbox"
        onChange={handleCheckedAll}
        checked={totalNum === checkedNum && totalNum !== 0 ? true : false}
      />
      全选 &nbsp;&nbsp;&nbsp;&nbsp;
      <span>
        已完成:{checkedNum}&nbsp;&nbsp;&nbsp;&nbsp;共{totalNum}
      </span>
    </div>
  );
}