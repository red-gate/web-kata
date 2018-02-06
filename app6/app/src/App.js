import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

import { fetchWebServerVersion } from './modules/versions'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products:[]
    }
    this.fetchProducts()

    this.props.fetchWebServerVersion()

    this.handleAddProduct = this.handleAddProduct.bind(this)
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

  handleAddProduct(event){
    event.preventDefault()
    const newProduct = {
      name: event.target.name.value,
      description: event.target.description.value
    }

    fetch('/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(newProduct)
    }).then(r => {
      return r.json()
    }).then(json => {
      this.setState({products: json})
    })
  }

  render() {
    return <div className='App'>
      <div className='App-header'>
        <h2>Kata 6 - Redux</h2>
        <pre>v{this.props.version}</pre>
      </div>
      <div className='products-add-product'>
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

const mapStateToProps = state => ({
  version: state.versions.version
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWebServerVersion
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
