import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import Products from './Products';
import { Product, ProductCollection, SoftwareProduct, SoftwareProductCollection } from './Interfaces';

const data = GetData();

interface State {
  productCollection: ProductCollection;
  productNameFilter: string;
}

class AppState implements State {
  constructor(
    public productCollection: ProductCollection,
    public productNameFilter: string
  ) {}
}

class App extends Component<{}, State> {
  constructor() {
    super({});
    this.state = new AppState(data, '');

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeProductFilter = this.changeProductFilter.bind(this);
  }

  changeProductFilter(event: any) : void {
    event.preventDefault();
    this.setState(new AppState( 
      this.state.productCollection,
      event.target.name.value)
    );
  }

  handleAddProduct(event: any) : void {
    event.preventDefault();
    const newProductArray = [...this.state.productCollection.products];

    newProductArray.push(new SoftwareProduct(
      event.target.name.value,
      event.target.description.value
    ));

    this.setState(new AppState(
        new SoftwareProductCollection(newProductArray),
        this.state.productNameFilter)
    );
  }

  removeProduct(product : Product) : void {
    const newProductArray = this.state.productCollection.products.filter(
      (p : Product) => p.name === product.name);
    
    this.setState(
      new AppState(new SoftwareProductCollection(newProductArray),
      this.state.productNameFilter)
    );
  }

  render() : JSX.Element {
    return <div className='App'>
      <div className='App-header'>
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>Filter products here...</div>
      <form onSubmit={this.changeProductFilter}>
        <label>Product to filter:
            <input type='text' name='name' />
        </label>
      </form>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
      <div className='products-container'>
        <Products productNameFilter={this.state.productNameFilter}
         productCollection={this.state.productCollection} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
