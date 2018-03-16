import * as React from 'react';
import { Component } from 'react';
import { GetData } from './data';
import ProductMenu from './ProductMenu'
import ProductContainer from './ProductContainer'
import { Product } from './Models/Product'
import './App.css'

interface AppState {
  products: Product[]
}

class App extends Component<{}, AppState> {
  constructor({ }) {
    super({})
    this.state = { products: GetData() }
  }

  render(): JSX.Element {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 4- Add router to an app</h2>
      </div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <ProductContainer />
      </div>
    </div>
  }
}

export default App
