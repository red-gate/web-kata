import 'whatwg-fetch'

export const WEB_SERVER_VERSION_REQUESTED = 'versions/WEB_SERVER_VERSION_REQUESTED'
export const WEB_SERVER_VERSION_COMPLETED = 'versions/WEB_SERVER_VERSION_COMPLETED'

const initialState = {
  inProgress: false,
  version: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WEB_SERVER_VERSION_REQUESTED:
      return {
        ...state,
        inProgress: true
      }
    case WEB_SERVER_VERSION_COMPLETED:
      return {
        ...state,
        inProgress: false,
        version: action.payload.version
      }
    default:
      return state
  }
}

export const fetchWebServerVersion = () => {
  return dispatch => {
    dispatch({ type: WEB_SERVER_VERSION_REQUESTED })
    const url = '/api/versions/get'
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(response => {
      return response.json()
    }).then(json => {
      dispatch({
        type: WEB_SERVER_VERSION_COMPLETED,
        payload: { version: json }
      })
    })
  }
}