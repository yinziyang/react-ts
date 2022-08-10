import { Button, List } from 'antd';
import { Todo } from '../../store/reducers';

interface MyProps {
  todoList: Todo[];
  handleDelTodo: (id: string) => void;
  handleOnMouse: (id: string, onMouse: boolean) => void;
}

const Items = (props: MyProps): JSX.Element => {
  return (
    <List
      size="large"
      style={{ width: '300px' }}
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={props.todoList}
      renderItem={(item) => (
        <List.Item
          onMouseOver={() => props.handleOnMouse(item.id, true)}
          onMouseLeave={() => props.handleOnMouse(item.id, false)}
        >
          {item.text}
          <Button
            type="primary"
            danger
            size="small"
            onClick={() => props.handleDelTodo(item.id)}
            style={{ marginLeft: '10px', display: item.onMouse ? '' : 'none', float: 'right' }}
          >
            删除
          </Button>
        </List.Item>
      )}
    />
  );
};

export default Items;
