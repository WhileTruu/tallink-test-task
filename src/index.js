import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }
      )
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
