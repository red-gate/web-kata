import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'
import Product from './Product.js';

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
  constructor(props)
  {
    super(props);
    this.state = {newProductName: '', newProductDescription: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({newProductName: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({newProductDescription: event.target.value});
  }

  handleSubmit(event) {
    fetch('http://localhost:1786/api/Products', {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({name: this.state.newProductName, desciption: this.state.newProductDescription})
    })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input name="new-product-name" value={this.state.newProductName} onChange={this.handleNameChange} />
      <input name="new-product-description" value={this.state.newProductDescription} onChange={this.handleDescriptionChange}  />
      <button type="submit" value="Submit">Submit</button>
    </form>
  }
}

export default App
