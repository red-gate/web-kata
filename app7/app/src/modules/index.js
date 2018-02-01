
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import versions from './versions'
import products from './products'

export default combineReducers({
  routing: routerReducer,
  versions,
  products
})