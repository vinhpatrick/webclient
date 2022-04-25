const searchInitialState = {
  searching: false,
  keyword: '',
  page: 1,
  limit: 20,
  sort: '-sold',
  total: 0,
  items: [],
}

const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case 'SEARCHING': {
      return { ...state, searching: true }
    }

    case 'SEARCHED': {
      const { items, total } = action.payload
      return { ...state, searching: false, items, total }
    }

    case 'PAGINATION': {
      const { page, limit, sort, keyword } = action.payload
      return { ...state, page, limit, sort, keyword }
    }

    default:
      return state
  }
}

export default searchReducer
