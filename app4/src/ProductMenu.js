import React, { Component } from 'react'
import './ProductMenu.css'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>{name}</div>
    </div>
  }
}

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