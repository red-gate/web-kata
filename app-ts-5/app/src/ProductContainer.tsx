import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';
import { Product } from './Models/Product';

interface Props extends RouteComponentProps<{ productName: string }> {
  products: Product[];
}

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const productName = this.props.match.params.productName;
    const product = this.props.products &&
      this.props.products.find(p => p.name.toLocaleLowerCase() === productName.toLocaleLowerCase());
    return (
      <div className='product-container'>
        <div>{product && product.name}</div>
        <div>{product && product.description}</div>
      </div>
    );
  }
}

export default ProductContainer;