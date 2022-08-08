import { Reducer } from "redux";

interface TodoAction {
  type: string;
  payload: { value: string };
}

const reducer: Reducer<string, TodoAction> = (state: string, action: TodoAction): string => {
  return state;
};

export default reducer;
