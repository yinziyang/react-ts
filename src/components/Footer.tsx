import React, { Fragment } from 'react';

interface FooterProps {
  totalNum: number;
  doneNum: number;
  doneAll: (done: boolean) => void;
}

export default class Footer extends React.Component<FooterProps> {
  handleDoneAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.doneAll(event.target.checked);
  };

  render() {
    const { totalNum, doneNum } = this.props;
    return (
      <Fragment>
        <input
          type="checkbox"
          onChange={this.handleDoneAll}
          checked={totalNum === doneNum && totalNum !== 0 ? true : false}
        ></input>
        共{this.props.totalNum},已完成{this.props.doneNum}
      </Fragment>
    );
  }
}
