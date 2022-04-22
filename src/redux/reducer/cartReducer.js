const cartInitialState = {
  loading: false,
  data: [],
  items: [],
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
      const items = data.map()
    }
  }
}
