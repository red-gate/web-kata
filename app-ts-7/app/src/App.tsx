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
import { fetchProducts, removeProduct, addProduct } from './modules/products';

import './App.css';

interface AppStateProps {
  version: string | undefined;
  products: Product[];
}

interface AppDispatchProps {
  fetchVersion: () => void;
  fetchProducts: () => void;
  removeProduct: (productName: string) => void;
  addProduct: (product: Product) => void;
}

interface State {
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<AppStateProps & AppDispatchProps, State> {
  constructor(props: AppStateProps & AppDispatchProps) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = {
      newProductName: '',
      newProductDescription: '',

    };
    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.onNewProductDescriptionChange = this.onNewProductDescriptionChange.bind(this);
    this.onNewProductNameChange = this.onNewProductNameChange.bind(this);

    this.props.fetchProducts();
    this.props.fetchVersion();
  }

  handleAddProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newProduct = {
      name: this.state.newProductName,
      description: this.state.newProductDescription
    } as Product;
    this.props.addProduct(newProduct);
    this.setState({
      newProductDescription: '',
      newProductName: '',
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
          <h2>Kata 7 - TypeScript - Redux - single source of truth</h2>
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
            products={this.props.products}
            removeProduct={this.props.removeProduct}
          />
          <Route
            exact={true}
            path='/products/:productName'
            render={(props) => <ProductContainer {...props} products={this.props.products} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  version: state.versions.version,
  products: state.products.products,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators(
  {
    fetchVersion,
    fetchProducts,
    removeProduct,
    addProduct,
  },
  dispatch);

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false // https://stackoverflow.com/a/44565602/989227
})(App);