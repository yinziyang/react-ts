import { Reducer, AnyAction } from "redux";

interface TodoListState {
  inputValue: string
  todoList: string[];
}
const initialState: TodoListState = {
  inputValue: '',
  todoList: ["1", "2", "3"]
}

export default function TodoReducer(state=initialState, action: AnyAction):TodoListState{
  return state
}
