import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

const API = 'http://localhost:1786/api/'
const GET_PRODUCTS = 'products'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  componentDidMount() {
    fetch(API + GET_PRODUCTS)
      .then(response => {
        if (response.ok) return response.json()
        else throw new Error("Something went wrong...")
      })
      .then(products => this.setState({products}))
      .catch(error => this.setState({error}))
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Redgate products</h2>
      </div>
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
