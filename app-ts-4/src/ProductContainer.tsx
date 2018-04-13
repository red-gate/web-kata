import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';

interface Props { }

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className='product-container'>
        Product container
      </div>
    );
  }
}

export default ProductContainer;