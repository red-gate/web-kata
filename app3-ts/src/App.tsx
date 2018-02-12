import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import Products from './Products';
import { Product, SoftwareProduct } from './Interfaces';

const data = GetData();

interface AppState {
  products: Product[];
  productToAdd: Product;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { products: data, productToAdd: new SoftwareProduct('', '') };

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this);

  }

  handleProductNameChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState(
      { ... this.state, productToAdd: { ...this.state.productToAdd, name: event.currentTarget.value } }
    );
  }

  handleProductDescriptionChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState(
      { ... this.state, productToAdd: { ...this.state.productToAdd, description: event.currentTarget.value } }
    );
  }

  handleAddProduct(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newProductCollection = [...this.state.products];
    newProductCollection.push(this.state.productToAdd);

    this.setState({ products: newProductCollection, productToAdd: new SoftwareProduct('', '') });
  }

  removeProduct(product: Product): void {
    const newProductArray = this.state.products.filter(
      (p: Product) => p.name !== product.name);

    this.setState({ products: newProductArray, productToAdd: this.state.productToAdd });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 3- Filter, show and hide objects</h2>
        </div>
        <div className='filter-products'>Filter products here...</div>
        <div className='add-product'>
          <form onSubmit={this.handleAddProduct}>
            <label>product name:
            <input
                type='text'
                name='name'
                onChange={this.handleProductNameChange}
                value={this.state.productToAdd.name}
              />
            </label><br /><br />
            <label>description:
            <input
                type='text'
                name='description'
                onChange={this.handleProductDescriptionChange}
                value={this.state.productToAdd.description}
              />
            </label><br /><br />
            <input type='submit' value='add product' />
          </form>
        </div>
        <div className='products-container'>
          <Products
            productCollection={this.state.products}
            removeProduct={this.removeProduct}
          />
        </div>
      </div>
    );
  }
}

export default App;
