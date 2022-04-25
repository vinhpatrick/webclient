import { searchProducts } from '../../api/userApi'

export const _search = (keyword, page = null, limit = null, sort = 'price') => {
  return (dispatch) => {
    dispatch({
      type: 'SEARCHING',
    })

    dispatch({
      type: 'PAGINATION',
      payload: { page, limit, sort, keyword },
    })

    return searchProducts({ search: keyword, page, limit, sort })
      .then((res) => {
        const { products, total } = res.data
        dispatch({
          type: 'SEARCHED',
          payload: { items: products, total },
        })
      })
      .catch((e) => {
        dispatch({
          type: 'SEARCHED',
          payload: { items: [] },
        })
      })
  }
}
