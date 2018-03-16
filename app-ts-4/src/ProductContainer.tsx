import * as React from 'react';
import { Component } from 'react';
import { GetData } from './data';
import { Product } from './Models/Product'
import './ProductContainer.css'

interface ProductContainerState {
  products: Product[]
}

class ProductContainer extends Component<{}, ProductContainerState> {
  constructor({ }) {
    super({})
    this.state = {
      products: GetData()
    }
  }

  render(): JSX.Element {
    return <div className='product-container'>
      Product container
    </div>
  }
}

export default ProductContainer