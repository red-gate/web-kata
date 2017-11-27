import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {

  onRemoveItem(productName){
    this.props.onProductRemove(productName)
  }

  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link>
        </div>
        <div
          className='product-item-remove'
          onClick={() => this.onRemoveItem(name)}>x</div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem
          product={p}
          key={'product-' + i}
          onProductRemove={(n) => this.props.onProductRemove(n)} />
      )}
    </div>
  }
}

export default ProductMenu