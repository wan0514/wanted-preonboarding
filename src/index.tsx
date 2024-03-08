import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Counter from 'feature/counter/Counter';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Counter />
    </Provider>
  </React.StrictMode>,
);
