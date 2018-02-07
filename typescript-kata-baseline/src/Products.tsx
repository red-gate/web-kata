import * as React from 'react';
import { Component } from 'react'
import './Products.css';
import ProductComponent from './ProductComponent';
import { Product, ProductCollection } from './Interfaces';

interface Props {
    productCollection : ProductCollection,
    productNameFilter: string,
    removeProduct : Function;
}

class Products extends Component<Props, {}> {
    render(){
        return <div className='products'>
            {this.props.productCollection.products.map(
                (p : Product, i : number) => {
                    
                    if(this.props.productNameFilter === '') {
                            return <ProductComponent
                            product={p}
                            key={'product-' + i }
                            removeProduct={this.props.removeProduct}
                        />;
                    }
                    else {
                        if(p.name === this.props.productNameFilter){
                            return <ProductComponent
                                product={p}
                                key={'product-' + i }
                                removeProduct={this.props.removeProduct}
                            />;
                        }
                    }

                    return;
                }
            )}
        </div>
    }
}

export default Products;