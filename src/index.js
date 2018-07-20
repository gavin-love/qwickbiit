import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// let store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  // <Provider store={store}>
  <App />, document.getElementById('root'));

registerServiceWorker();
