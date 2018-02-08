import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import ProductComponent from './ProductComponent';
import { Product, ProductCollection } from './Interfaces';

interface Props {
    productCollection: ProductCollection;
    removeProduct: Function;
}

class Products extends Component<Props, {}> {
    render(): JSX.Element {
        return (
        <div className='products'>
            {this.props.productCollection.products.map(
                (p: Product, i: number) => {                
                    return <ProductComponent
                        product={p}
                        key={'product-' + i}
                        removeProduct={this.props.removeProduct}
                    />;
                }
            )}
        </div>
        );
    }
}

export default Products;