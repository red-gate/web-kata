import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import base64 from 'base-64'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import ProductForm from './ProductForm.js'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: [],
      token: ''
    }
  }

  componentDidMount() {
    this.fetchProducts()
    this.fetchToken()
  }

  async fetchProducts() {
    const response = await fetch('http://localhost:1786/api/products')
    if (response.status !== 200) throw new Error('Error Getting Products')
    const products = await response.json()

    this.setState({products})
  }

  async fetchToken() {
    const username = 'admin';
    const password = 'password';

    const response = await fetch('http://localhost:1786/api/auth/token', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Authorization': 'Basic ' + base64.encode(username + ":" + password)
      }
    })
    const result = await response.json()

    this.setState({ token: result.token })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Redgate products</h2>
      </div>
      <ProductForm token={this.state.token} />
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
