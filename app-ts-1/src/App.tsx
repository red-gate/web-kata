import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import { ProductList } from './ProductList';
class App extends Component {
 
  render(): JSX.Element {
    return (
      <ProductList products={GetData()} />
    );

  }
}

export default App;