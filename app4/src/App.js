import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      products: data.products,
      filter: ''
    }

    this.handleFilterProducts = this.handleFilterProducts.bind(this)
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
  }

  handleAddProduct(event){
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value
    })

    this.setState({products: products})
  }

  handleFilterProducts(event){
    event.preventDefault()
    this.setState({filter: event.target.value})
  }

  removeProduct(product){
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }

  render() {
    
    const filteredProducts = _.filter(
      this.state.products,
      p => p.name.toLowerCase().indexOf(this.state.filter) >= 0,
      this
    )

    return (
      <div className="App">
        <div className="App-header">
          <h2>Kata 4- Add router to an app</h2>
        </div>
        <div className='filter-products'>
          <form onChange={this.handleFilterProducts}>
            <label>filter by product name:
              <input type='text' name='name' />
            </label>
          </form>
        </div>
        <div className='add-product'>
          <form onSubmit={this.handleAddProduct}>
            <label>product name:
              <input type='text' name='name' />
            </label>
            <label>description:
              <input type='text' name='description'/>
            </label>
            <input type='submit' value='add product' />
          </form>
        </div>
        <div className='products-container'>
          <Products products={filteredProducts} removeProduct={this.removeProduct} />
        </div>
      </div>
    )
  }
}

export default App
