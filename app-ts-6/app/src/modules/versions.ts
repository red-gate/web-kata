import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { createAction } from 'typesafe-actions';

export interface VersionsState {
  inProgress: boolean;
  version: string | undefined;
  error: string | undefined;
}

enum TypeKeys {
  WEB_SERVER_VERSION_REQUESTED = 'versions/WEB_SERVER_VERSION_REQUESTED',
  WEB_SERVER_VERSION_COMPLETED = 'versions/WEB_SERVER_VERSION_COMPLETED',
  WEB_SERVER_VERSION_FAILED = 'versions/WEB_SERVER_VERSION_FAILED',
}

export interface VersionRequestedAction {
  type: TypeKeys.WEB_SERVER_VERSION_REQUESTED;
}

export interface VersionCompletedAction {
  type: TypeKeys.WEB_SERVER_VERSION_COMPLETED;
  payload: {
    version: string;
  };
}

export interface VersionFailedAction {
  type: TypeKeys.WEB_SERVER_VERSION_FAILED;
  payload: {
    error: string;
  };
}

export type VersionActionTypes =
  | VersionRequestedAction
  | VersionCompletedAction
  | VersionFailedAction;

export const VersionActions = {
  versionRequested: createAction(TypeKeys.WEB_SERVER_VERSION_REQUESTED, () => ({
    type: TypeKeys.WEB_SERVER_VERSION_REQUESTED
  })),
  versionCompleted: createAction(TypeKeys.WEB_SERVER_VERSION_COMPLETED, (version: string) => ({
    type: TypeKeys.WEB_SERVER_VERSION_COMPLETED,
    payload: { version },
  })),
  versionFailed: createAction(TypeKeys.WEB_SERVER_VERSION_FAILED, (error: string) => ({
    type: TypeKeys.WEB_SERVER_VERSION_FAILED,
    payload: { error },
  })),
};

const createEmptyMember = (): VersionsState => ({
  inProgress: false,
  version: undefined,
  error: undefined,
});

export default (state = createEmptyMember(), action: VersionActionTypes) => {
  switch (action.type) {
    case TypeKeys.WEB_SERVER_VERSION_REQUESTED:
      return {
        ...state,
        inProgress: true,
      };
    case TypeKeys.WEB_SERVER_VERSION_COMPLETED:
      return {
        ...state,
        inProgress: false,
        version: action.payload.version
      };
    case TypeKeys.WEB_SERVER_VERSION_FAILED:
      return {
        ...state,
        inProgress: false,
        version: undefined,
        error: action.payload.error
      };
    default:
      return state;
  }
};

function fetchWebServerVersion() {
  const url = '/api/versions/get';
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    const error = new Error(response.statusText);
    throw error;
  });
}

type VersionThunkAsync = ActionCreator<ThunkAction<Promise<void>, VersionsState, void>>;

export const fetchVersion: VersionThunkAsync = () => {
  return async (dispatch: Dispatch<VersionsState>): Promise<void> => {
    dispatch(VersionActions.versionRequested());
    await fetchWebServerVersion()
      .then((version: string) => dispatch(VersionActions.versionCompleted(version)))
      .catch(e => {
        dispatch(VersionActions.versionFailed(e.error));
      });
  };
};