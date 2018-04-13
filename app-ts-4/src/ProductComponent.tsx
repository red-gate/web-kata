import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';

interface Props {
  product: Product;
}

class ProductComponent extends Component<Props, {}> {
  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>{this.props.product.name}</div>
          <div className='desc'>{this.props.product.description}</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;