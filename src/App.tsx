import React, { Fragment, createRef } from 'react';

interface MyProps {
  propName?: string;
}

interface MyState {
  statepName?: string;
}

export class ClassApp extends React.Component<MyProps, MyState> {
  private textRef = createRef<HTMLInputElement>();

  constructor(props: MyProps) {
    super(props);
    this.state = { statepName: '' };
  }

  handleClick = (): void => {
    console.log(this.textRef.current!.value);
  };

  render() {
    return (
      <Fragment>
        <input type="text" ref={this.textRef}></input>
        &nbsp;
        <button onClick={this.handleClick}>获取text值</button>
      </Fragment>
    );
  }
}

export const FuncApp = (): JSX.Element => {
  const textRef = createRef<HTMLInputElement>();
  const handleClick = () => {
    console.log(textRef.current!.value);
  };

  return (
    <Fragment>
      <input type="text" ref={textRef}></input>
      &nbsp;
      <button onClick={handleClick}>获取text值</button>
    </Fragment>
  );
};
