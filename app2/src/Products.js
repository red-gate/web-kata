import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    render(){
        return <div className='product'>
            <div className='name'>{this.props.product.name}</div>
            <div className='desc'>{this.props.product.description}</div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product product={p} key={'product-' + i }/>
            )}
        </div>
    }
}

export default Products