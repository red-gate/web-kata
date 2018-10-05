import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import ProductForm from './ProductForm.js'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    fetch('http://localhost:1786/api/products')
      .then(response => response.json())
      .then(products => this.setState({products}))
      .catch(error => console.log(error));

    this.state = { products: [] }
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

export default App
