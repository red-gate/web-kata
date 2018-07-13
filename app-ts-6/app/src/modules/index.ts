import { combineReducers } from 'redux';
import versions, { VersionsState, VersionActionTypes } from './versions';

interface StoreEnhancerState { }

export interface RootState extends StoreEnhancerState {
  versions: VersionsState;
}

export default combineReducers<RootState>({
  versions,
});

type AppAction =
  | VersionActionTypes;

export type RootAction = AppAction;