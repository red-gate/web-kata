import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { GetData } from './data';

const products = GetData();

class App extends Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>View to add product here...</div>
        <div className='products-container'>
          <ProductList products={products} />
        </div>
      </div>);
  }
}

export default App;