const cartInitialState = {
  loading: false,
  data: [],
  error: '',
}

const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'LOAD_CART': {
      const { loading = true } = action.payload || {}
      return { ...state, loading, error: '' }
    }

    case 'SET_CART': {
      const { data } = action.payload
      return { ...state, data, loading: false, error: '' }
    }

    case 'ADD_TO_CART': {
      const { cartItem } = action.payload
      const newItems = state.items
      newItems.push(cartItem)

      return { ...state, items: newItems, loading: false, error: '' }
    }

    case 'CART_ERROR': {
      const { error } = action.payload
      return { ...state, error, loading: false }
    }

    default:
      return state
  }
}

export default cartReducer
