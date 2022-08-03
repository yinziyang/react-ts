import React, { Fragment, useState } from 'react';

interface HeaderProps {
  addTodo: (text: string) => void;
}

const Header = ({ addTodo }: HeaderProps): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text.trim());
      setText('');
    } else {
      setText('');
    }
  };

  const handleKeyPressSaveText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const saveText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <Fragment>
      <input
        type="text"
        placeholder="输入todo"
        value={text}
        onChange={saveText}
        onKeyPress={handleKeyPressSaveText}
      ></input>
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleAddTodo}>确认</button>
    </Fragment>
  );
};

export default Header;
