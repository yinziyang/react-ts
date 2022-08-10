# 这是一个简单的使用Redux示例

## Redux Flow
![image](https://user-images.githubusercontent.com/6504172/183794936-1d65c027-5058-4e18-b708-b7cc523e47f6.png)

## 创建reducer
```typescript

export interface TodoItem {
  id: string;
  mouseIn: boolean;
  checked: boolean;
  text: string;
}

export interface TodoListState {
  inputValue: string;
  todoList: TodoItem[];
}

// Reducer第二个参数中的action必须要有type字段
export interface TodoAction {
  type: string;
  id?: string;
  mouseIn?: boolean;
  checked?: boolean;
  text?: string;
}

// 第一个参数state为要维护的state
export function TodoReducer(state = initialState, action: TodoAction): TodoListState {
	switch (action.type) { 
    case 'change_input_value': {
			const newState: TodoListState = { ...state };
      newState.inputValue = action.text!;
      return newState;
		}
	}
  return state
}
```


## 创建store

```typescript
import { legacy_createStore as createStore } from "redux";
import { TodoReducer } from "./reducer";

const store = createStore(
  TodoReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()  // 支持浏览器Redux插件扩展
);

export default store;
```

## 构建action
```typescript
// 类组件中的构造函数订阅store
constructor(props: MyProps) {
  super(props);
  this.state = store.getState();
  store.subscribe(this.handleStoreChange);
}

handleStoreChange = () => {
	this.setState(store.getState());
};

// 构建dispatch

handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
  const action: TodoAction = {
    type: 'change_input_value',
    text: e.target.value,
  };
  store.dispatch(action);
};
```
