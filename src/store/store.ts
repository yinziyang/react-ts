import { legacy_createStore } from 'redux';
import { TodoListReducer } from './reducers';

export const store = legacy_createStore(
  TodoListReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
