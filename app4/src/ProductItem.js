import React, { Component } from 'react'
import './ProductItem.css'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>{name}</div>
    </div>
  }
}

export default ProductItem