import React, { Component } from 'react'
import {
  Redirect
} from 'react-router-dom'

class Product extends Component {
  render() {
    if(!this.props.product) {
      return <Redirect to={{
        pathname: '/'
      }}/>
    }
    return <div className='product'>
      <div className='details'>
        <div className='name'>{this.props.product.name}</div>
        <div className='desc'>{this.props.product.description}</div>
      </div>
    </div>
  }
}

export default Product