import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);

