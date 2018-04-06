import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import { Product } from './Models/Product';

interface Props {
  product: Product;
  removeProduct: Function;
}

interface State { }

class ProductComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>{this.props.product.name}</div>
          <div className='desc'>{this.props.product.description}</div>
        </div>
        <div className='actions'>
          <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;