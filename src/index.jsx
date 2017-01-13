import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import App from './containers/appContainer';
import markdownReducer from './reducer';
import '../style/style.scss';

const loggerMiddleware = createLogger();

const store = createStore(
  markdownReducer,
  applyMiddleware(
    loggerMiddleware,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
