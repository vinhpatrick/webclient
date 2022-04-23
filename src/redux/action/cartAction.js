import { getCart } from '../../api/userApi'
export const _getMyCart = (userId) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART',
    })
    return getCart(userId)
      .then((response) => {
        // const { data } = response.data
        dispatch({
          type: 'SET_CART',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.log('error', error)
        // const { status, data } = error.response
        // if (status >= 500) {
        //   dispatch({
        //     type: 'CART_ERROR',
        //     payload: {
        //       error: 'Lỗi hệ thống, vui lòng thử lại sau!',
        //     },
        //   })
        // } else {
        //   // const { message } = e.response.data
        //   dispatch({
        //     type: 'CART_ERROR',
        //     payload: {
        //       error: 'loi cart',
        //     },
        //   })
        // }
      })
  }
}
