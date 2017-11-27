import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products:[]
    }
    this.fetchProducts()
  }

  fetchProducts(){
    fetch('/api/products/get',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json()
    }).then(json => {
      this.setState({products: json})
    })
  }

  onProductRemove(productName){
    fetch('/api/products/delete/'+productName, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json()
    }).then(json => {
      this.setState({products: json})
    })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 6 - Redux</h2>
      </div>
      <div className='products-add-product'>add product here</div>
      <div className='products-container'>
        <ProductMenu
          products={this.state.products}
          onProductRemove={n => this.onProductRemove(n)} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App
