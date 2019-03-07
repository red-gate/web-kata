import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      products: []
    }
    fetch('http://localhost:1786/api/Products', { method: "GET"})
    .then(response => response.json())
    .then(response => this.setState({
      products: response
    }))
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Redgate products</h2>
      </div>
      <ProductForm />
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

class ProductForm extends Component {
  render() {
    return <form>
      <input name="new-product-name" />
      <input name="new-product-description" />
      <button type="submit">Submit</button>
    </form>
  }
}

export default App
