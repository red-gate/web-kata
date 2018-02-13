import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <div>
              <App />
          </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)