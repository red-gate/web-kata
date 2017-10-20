import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import data from './data.js'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: data.products }
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'>add product here</div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App
