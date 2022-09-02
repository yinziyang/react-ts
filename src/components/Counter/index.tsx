import { Component } from 'react';
import { Button, Input, Row, Col } from 'antd';
import { connect, ConnectedProps } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
} from '../../features/counter/counterSlice';

const mapStateToProps = (state: RootState) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    increment() {
      dispatch(increment());
    },
    decrement() {
      dispatch(decrement());
    },
    incrementByAmount(incrementValue: number) {
      dispatch(incrementByAmount(Number(incrementValue)));
    },
    incrementIfOdd(incrementValue: number) {
      dispatch(incrementIfOdd(Number(incrementValue)));
    },
    incrementAsync(incrementValue: number) {
      dispatch(incrementAsync(Number(incrementValue)));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

interface State {
  incrementValue: number;
}

class Counter extends Component<Props, State> {
  state = { incrementValue: 0 };
  render() {
    const counter = this.props.counter;

    return (
      <div>
        <Row style={{ marginTop: '100px' }}>
          <Col span={11}>
            <Button
              style={{ float: 'right', marginRight: '10px' }}
              onClick={() => this.props.decrement()}
            >
              -
            </Button>
          </Col>
          <Col span={2}>
            <h2 style={{ textAlign: 'center' }}>{counter.value}</h2>
          </Col>
          <Col span={11}>
            <Button
              style={{ float: 'left', marginLeft: '10px' }}
              onClick={() => this.props.increment()}
            >
              +
            </Button>
          </Col>
        </Row>

        <Row style={{ marginTop: '50px' }}>
          <Col span={1} offset={9}>
            <Input
              value={this.state.incrementValue}
              onChange={(e) => {
                this.setState({ incrementValue: Number(e.target.value) });
              }}
            ></Input>
          </Col>
          <Col span={2}>
            <Button
              style={{ float: 'left', marginLeft: '10px' }}
              onClick={() => {
                this.props.incrementByAmount(Number(this.state.incrementValue));
              }}
            >
              Add Amount
            </Button>
          </Col>
          <Col span={2}>
            <Button
              style={{ float: 'left', marginLeft: '10px' }}
              onClick={() => {
                this.props.incrementAsync(Number(this.state.incrementValue));
              }}
              loading={counter.status === 'loading' ? true : false}
            >
              Add Async
            </Button>
          </Col>
          <Col span={2}>
            <Button
              style={{ float: 'left', marginLeft: '10px' }}
              onClick={() => {
                this.props.incrementIfOdd(Number(this.state.incrementValue));
              }}
            >
              Add If Odd
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connector(Counter);
