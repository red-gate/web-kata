import { combineReducers } from 'redux';
import versions, { VersionsState, VersionActionTypes } from './versions';
import products, { ProductsState, ProductsActionTypes } from './products';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  versions: VersionsState;
  products: ProductsState;
}

export default combineReducers<RootState>({
  versions,
  products,
});

type AppAction =
  | ProductsActionTypes
  | VersionActionTypes;

export type RootAction = AppAction;