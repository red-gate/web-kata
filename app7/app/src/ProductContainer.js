import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  render() {
    const { selectedProduct } = this.props
    return <div className='product-container'>
      <div className='product-header'>
      </div>
      {selectedProduct && <Product product={this.props.selectedProduct} />}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedProduct: state.products.products && state.products.products.find(p => p.name === ownProps.match.params.productName),
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)