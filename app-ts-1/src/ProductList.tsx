import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { Product } from './Models/Product';

interface ProductListProps {
    products: Product[];
}

interface ProductItemProps {
    product: Product;
}

class ProductItem extends Component<ProductItemProps, {}> {
render(): JSX.Element {
    let isFree = this.props.product.free;
    let isNew = this.props.product.new;
    return (
    <li key={this.props.product.name}>
    {this.props.product.name}
    {isFree !== null ? <a className='free'>#Free</a> : null}
    {isNew !== null ? <a className='new'>#New</a> : null} 
    </li>
    );
}
}

export class ProductList extends Component<ProductListProps, {}> {
    GetProduct(props: Product[]) {
        return props.map((prop, index) =>
            <ProductItem key={index} product={prop} />
        );
    }
    render(): JSX.Element {
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
                </div>
                <p className='App-intro'>
                    To get started change this text and then save to reload.
          </p>
                <div className='products'>
                    <ul>{this.GetProduct(this.props.products)}</ul>
                </div>
            </div>);
    }
}