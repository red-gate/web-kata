import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { createAction } from 'typesafe-actions';

import { Product } from '../Models/Product';
import {
  fetchProducts as fetchProductsApi,
  addProduct as addProductApi,
  removeProduct as removeProductApi
} from '../api/products';

export interface ProductsState {
  inProgress: boolean;
  products: Product[];
}

enum TypeKeys {
  PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED',
  PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED',
  PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED',
  PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED',
  PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED',
  PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED',
}

export interface ProductsRequestedAction {
  type: TypeKeys.PRODUCTS_REQUESTED;
}

export interface ProductsCompletedAction {
  type: TypeKeys.PRODUCTS_COMPLETED;
  payload: {
    products: Product[];
  };
}

export interface ProductAddRequestedAction {
  type: TypeKeys.PRODUCT_ADD_REQUESTED;
}

export interface ProductAddCompletedAction {
  type: TypeKeys.PRODUCT_ADD_COMPLETED;
  payload: {
    products: Product[];
  };
}

export interface ProductRemoveRequestedAction {
  type: TypeKeys.PRODUCT_REMOVE_REQUESTED;
}

export interface ProductRemoveCompletedAction {
  type: TypeKeys.PRODUCT_REMOVE_COMPLETED;
  payload: {
    products: Product[];
  };
}

export type ProductsActionTypes =
  | ProductsRequestedAction
  | ProductsCompletedAction
  | ProductAddRequestedAction
  | ProductAddCompletedAction
  | ProductRemoveRequestedAction
  | ProductRemoveCompletedAction;

export const ProductsActions = {
  productsRequested: createAction(TypeKeys.PRODUCTS_REQUESTED, () => ({
    type: TypeKeys.PRODUCTS_REQUESTED
  })),
  productsCompleted: createAction(TypeKeys.PRODUCTS_COMPLETED, (products: Product[]) => ({
    type: TypeKeys.PRODUCTS_COMPLETED,
    payload: {
      products
    }
  })),
  productAddRequested: createAction(TypeKeys.PRODUCT_ADD_REQUESTED, () => ({
    type: TypeKeys.PRODUCT_ADD_REQUESTED,
  })),
  productAddCompleted: createAction(TypeKeys.PRODUCT_ADD_COMPLETED, (products: Product[]) => ({
    type: TypeKeys.PRODUCT_ADD_COMPLETED,
    payload: {
      products
    }
  })),
  productRemoveRequested: createAction(TypeKeys.PRODUCT_REMOVE_REQUESTED, () => ({
    type: TypeKeys.PRODUCT_REMOVE_REQUESTED,
  })),
  productRemoveCompleted: createAction(TypeKeys.PRODUCT_REMOVE_COMPLETED, (products: Product[]) => ({
    type: TypeKeys.PRODUCT_REMOVE_COMPLETED,
    payload: {
      products
    }
  }))
};

const createEmptyMember = (): ProductsState => ({
  inProgress: false,
  products: [],
});

export default (state = createEmptyMember(), action: ProductsActionTypes) => {
  switch (action.type) {
    case TypeKeys.PRODUCTS_REQUESTED:
      return {
        ...state,
        inProgress: true,
      };
    case TypeKeys.PRODUCTS_COMPLETED:
      return {
        ...state,
        inProgress: false,
        products: action.payload.products
      };
    case TypeKeys.PRODUCT_ADD_REQUESTED:
      return {
        ...state,
        inProgress: true,
      };
    case TypeKeys.PRODUCT_ADD_COMPLETED:
      return {
        ...state,
        inProgress: false,
        products: action.payload.products
      };
    case TypeKeys.PRODUCT_REMOVE_REQUESTED:
      return {
        ...state,
        inProgress: true,
      };
    case TypeKeys.PRODUCT_REMOVE_COMPLETED:
      return {
        ...state,
        inProgress: false,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

type ProductsThunkAsync = ActionCreator<ThunkAction<Promise<void>, ProductsState, void>>;

export const fetchProducts: ProductsThunkAsync = () => {
  return async (dispatch: Dispatch<ProductsState>): Promise<void> => {
    dispatch(ProductsActions.productsRequested());
    await fetchProductsApi()
      .then((products: Product[]) => dispatch(ProductsActions.productsCompleted(products)))
      .catch(e => {
        // dispatch(ProductsActions.productsFetchFailed(e.error));
      });
  };
};

export const addProduct: ProductsThunkAsync = (product: Product) => {
  return async (dispatch: Dispatch<ProductsState>): Promise<void> => {
    dispatch(ProductsActions.productAddRequested());
    await addProductApi(product)
      .then((products: Product[]) => dispatch(ProductsActions.productAddCompleted(products)))
      .catch(e => {
        // dispatch
      });
  };
};

export const removeProduct: ProductsThunkAsync = (productName: string) => {
  return async (dispatch: Dispatch<ProductsState>): Promise<void> => {
    dispatch(ProductsActions.productRemoveRequested());
    await removeProductApi(productName)
      .then((products: Product[]) => dispatch(ProductsActions.productRemoveCompleted(products)))
      .catch(e => {
        // dispatch
      });
  };
};