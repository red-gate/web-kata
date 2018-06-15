import { Store, createStore, applyMiddleware, compose } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './modules';

const initialState = {};

const middleware = [
  thunk,
  logger,
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