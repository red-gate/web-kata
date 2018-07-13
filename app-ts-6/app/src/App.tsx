import * as React from 'react';
import { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';

import { RootState, RootAction } from './modules';
import { fetchVersion } from './modules/versions';

import './App.css';

interface AppStateProps {
  version: string | undefined;
}

interface AppDispatchProps {
  fetchVersion: () => void;
}

interface State {
  products: Product[];
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<AppStateProps & AppDispatchProps, State> {
  constructor(props: AppStateProps & AppDispatchProps) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = {
      products: [],
      newProductName: '',
      newProductDescription: '',

    };
    this.fetchProducts = this.fetchProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.onNewProductDescriptionChange = this.onNewProductDescriptionChange.bind(this);
    this.onNewProductNameChange = this.onNewProductNameChange.bind(this);

    this.fetchProducts();
    this.props.fetchVersion();
  }

  fetchProducts() {
    fetch('/api/products/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json();
    }).then(json => {
      this.setState({ products: json });
    });
  }

  removeProduct(productName: string): void {
    fetch('/api/products/delete/' + productName, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json();
    }).then(json => {
      this.setState({ products: json });
    });
  }

  handleAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProduct = {
      name: this.state.newProductName,
      description: this.state.newProductDescription
    } as Product;
    this.addProduct(newProduct);
    this.setState({
      newProductDescription: '',
      newProductName: '',
    });
  }

  addProduct(product: Product) {
    fetch('/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(product)
    }).then(r => {
      return r.json();
    }).then(json => {
      this.setState({ products: json });
    });
  }

  onNewProductNameChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({ newProductName: event.currentTarget.value });
  }

  onNewProductDescriptionChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({ newProductDescription: event.currentTarget.value });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 6 - TypeScript - Redux</h2>
          <small>v{this.props.version}</small>
        </div>
        <div className='add-form'>
          <form onSubmit={this.handleAddProduct}>
            <label>name:</label>
            <input name='name' onChange={this.onNewProductNameChange} />
            <label>description:</label>
            <input name='description' onChange={this.onNewProductDescriptionChange} />
            <input type='submit' />
          </form>
        </div>
        <div className='products-container'>
          <ProductMenu
            products={this.state.products}
            removeProduct={this.removeProduct}
          />
          <Route
            exact={true}
            path='/products/:productName'
            render={(props) => <ProductContainer {...props} products={this.state.products} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  version: state.versions.version,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators(
  {
    fetchVersion,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false // https://stackoverflow.com/a/44565602/989227
})(App);