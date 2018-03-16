import React, { Component } from 'react'
import './ProductMenu.css'
import ProductItem from './ProductItem'

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem product={p} key={'product-' + i} />
      )}
    </div>
  }
}

export default ProductMenu