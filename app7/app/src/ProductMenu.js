import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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

const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductMenu)