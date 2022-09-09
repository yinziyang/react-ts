import React from 'react';
import { Provider } from 'react-redux';
import DomainRules from './pages/DomainRules';
import { store } from './store/store';

export default function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <DomainRules></DomainRules>
    </Provider>
  );
}
