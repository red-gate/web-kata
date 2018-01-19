
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import products from './products'

export default combineReducers({
  routing: routerReducer,
  products,
})