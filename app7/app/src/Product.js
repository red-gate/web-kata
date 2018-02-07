import React, { Component } from 'react'

class Product extends Component {
  render() {
    return <div className='product'>
      <div className='details'>
        <div className='name'>{this.props.product.name}</div>
        <div className='desc'>{this.props.product.description}</div>
      </div>
    </div>
  }
}

export default Product