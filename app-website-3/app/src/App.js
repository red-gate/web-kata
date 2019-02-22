import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import ProductForm from './ProductForm.js'
import './App.css'

const API = 'http://localhost:1786/api/'
const PRODUCTS = 'products'
const NOT_FOUND = 404
const CONFLICT = 409

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }

    this.fetchProducts = this.fetchProducts.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts() {
    fetch(API + PRODUCTS)
      .then(response => {
        if (response.ok) return response.json()
        else throw new Error("Something went wrong...")
      })
      .then(products => this.setState({products: products, error: ''}))
      .catch(error => this.setState({error}))
  }

  addProduct(product) {
    const request = {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(product)
    }

    fetch(API + PRODUCTS, request)
      .then(response => {
        if (response.status === NOT_FOUND) {
          this.setState({error: 'Product name invalid'})
        } else if (response.status === CONFLICT) {
          this.setState({error: 'Product already exists'})
        } else {
          this.fetchProducts()
        }
      })
  }

  updateProduct(product) {
    const request = {
      method: 'PUT',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(product)
    }

    fetch(API + PRODUCTS, request)
      .then(response => {
        if (response.status === NOT_FOUND) {
          this.setState({error: 'Can\'t update a product that doesn\'t exist'})
        } else {
          this.fetchProducts()
        }
      })
  }

  deleteProduct(name) {
    const request = {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json; charset=utf-8'
      }
    }

    fetch(API + PRODUCTS + '/' + name, request)
      .then(response => {
        if (response.status === NOT_FOUND) {
          this.setState({error: 'Can\'t delete a product that doesn\'t exist'})
        } else {
          this.fetchProducts()
        }
      })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Redgate products</h2>
      </div>
      <ProductForm
        addProduct = {this.addProduct}
        updateProduct = {this.updateProduct}
        deleteProduct = {this.deleteProduct}
        error = {this.state.error}
      />
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
