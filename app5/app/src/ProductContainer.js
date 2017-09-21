import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: this.props.match.params.productName
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.match.params.productName !== this.props.match.params.productName) {
      this.setState({
        productName: nextProps.match.params.productName
      })
    }
  }

  render() {
    const p = _.find(this.props.products, p => p.name === this.state.productName)
    return <div className='product-container'>
      <Product product={p} />
    </div>
  }
}

export default ProductContainer