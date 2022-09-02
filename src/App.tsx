import { Component } from 'react';
import Counter from './components/Counter';

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  }
}
