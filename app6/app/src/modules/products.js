import 'whatwg-fetch'

export const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED'
export const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED'

const initialState = {
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUESTED:
      return {
        ...state,
      }

    case PRODUCTS_COMPLETED:
      return {
        ...state,
      }

    default:
      return state
  }
}