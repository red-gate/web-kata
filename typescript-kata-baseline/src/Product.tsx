import * as React from 'react';
import { Component } from 'react'
import './Products.css';
import { Product } from './Interfaces';

interface Props {
    product : Product,
    removeProduct : Function;
}

interface State {
    showDescription : boolean
}

class Product extends Component<Props, State> {
    constructor(props : Props){
        super(props)
        this.state = { showDescription: false };
        this.toggleShowDescription = this.toggleShowDescription.bind(this);
    }

    toggleShowDescription() : void {
        this.setState({ showDescription: !this.state.showDescription});
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.state.showDescription ? this.props.product.description : null}</div>
                {this.state.showDescription ? null : (<button onClick={this.toggleShowDescription}>+</button>) }
                {this.state.showDescription ? (<button onClick={this.toggleShowDescription}>-</button>) : null }
            </div>
            <div className='actions'>
                <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

export default Product;