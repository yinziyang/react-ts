import { nanoid } from 'nanoid';
import { TODO_ACTION } from './actionTypes';

export interface TodoListAction {
  type: number;
  inputText?: string;
  id?: string;
  onMouse?: boolean;
  checked?: boolean;
}

export interface TodoListState {
  inputText?: string;
  todoList: Todo[];
}

export interface Todo {
  id: string;
  checked: boolean;
  onMouse: boolean;
  text: string;
}

const initTodoListState: TodoListState = {
  inputText: '',
  todoList: [],
};

export function TodoListReducer(state = initTodoListState, action: TodoListAction): TodoListState {
  switch (action.type) {
    case TODO_ACTION.CHANGE_INPUT_TEXT: {
      const newState = { ...state };
      newState.inputText = action.inputText;
      return newState;
    }
    case TODO_ACTION.ADD: {
      const newState = { ...state };
      const text = action.inputText!.trim();
      if (text !== '') {
        const todo: Todo = { id: nanoid(), checked: false, onMouse: false, text: text };
        newState.todoList = [todo, ...state.todoList];
      }
      newState.inputText = '';
      return newState;
    }
    case TODO_ACTION.DEL: {
      const newState = { ...state };
      newState.todoList = newState.todoList.filter((item) => {
        return item.id !== action.id;
      });
      return newState;
    }
    case TODO_ACTION.ON_MOUSE: {
      const newState = { ...state };
      newState.todoList.forEach((item) => {
        if (item.id === action.id) {
          item.onMouse = action.onMouse!;
        }
      });
      return newState;
    }
  }
  return state;
}
