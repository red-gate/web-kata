import { Store, createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const initialState = {};

const middleware = [
  thunk,
  logger,
  routerMiddleware(history)
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
);

// tslint:disable-next-line:no-any
const store: Store<any> = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;