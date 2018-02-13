import 'whatwg-fetch'

export const PRODUCT_REQUESTED = 'products/PRODUCTS_REQUESTED'
export const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED'
export const PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED'
export const PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED'
export const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED'
export const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED'

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUESTED:
      return {
        ...state,
        productsInProgress: true
      }
    case PRODUCTS_COMPLETED:
      return {
        ...state,
        products: action.payload.products,
        productsInProgress: false,
      }
    case PRODUCT_ADD_REQUESTED:
      return {
        ...state,
      }
    case PRODUCT_ADD_COMPLETED:
      return {
        ...state,
        products: action.payload.products
      }
    case PRODUCT_REMOVE_REQUESTED:
      return {
        ...state,
      }
    case PRODUCT_REMOVE_COMPLETED:
      return {
        ...state,
        products: action.payload.products
      }
    default:
      return state
  }
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch({ type: PRODUCT_REQUESTED })
    fetch('/api/products/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json()
    }).then(json => {
      dispatch({
        type: PRODUCTS_COMPLETED,
        payload: { products: json }
      })
    })
  }
}

export const removeProduct = (productName) => {
  return dispatch => {
    dispatch({ type: PRODUCT_REMOVE_REQUESTED })
    fetch('/api/products/delete/' + productName, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json()
    }).then(json => {
      dispatch({
        type: PRODUCT_REMOVE_COMPLETED,
        payload: { products: json }
      })
    })
  }
}

export const addProduct = (newProduct) => {
  return dispatch => {
    dispatch({ type: PRODUCT_ADD_REQUESTED })
    fetch('/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(newProduct)
    }).then(r => {
      return r.json()
    }).then(json => {
      dispatch({
        type: PRODUCT_ADD_COMPLETED,
        payload: { products: json }
      })
    })
  }
}