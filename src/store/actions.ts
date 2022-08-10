import { TODO_ACTION } from './actionTypes';
import { TodoListAction } from './reducers';
export const createChangeInputTextAction = (inputText: string): TodoListAction => {
  return {
    type: TODO_ACTION.CHANGE_INPUT_TEXT,
    inputText: inputText,
  };
};

export const createAddAction = (text: string): TodoListAction => {
  return {
    type: TODO_ACTION.ADD,
    inputText: text,
  };
};

export const createDelAction = (id: string): TodoListAction => {
  return {
    type: TODO_ACTION.DEL,
    id: id,
  };
};

export const createOnMouseAction = (id: string, onMouse: boolean): TodoListAction => {
  return {
    type: TODO_ACTION.ON_MOUSE,
    id: id,
    onMouse: onMouse,
  };
};

export const createCheckAction = (id: string, checked: boolean): TodoListAction => {
  return {
    type: TODO_ACTION.CHECK,
    id: id,
    checked: checked,
  };
};
