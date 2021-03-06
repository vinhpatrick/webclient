import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart, getCart, removeFromCart } from '../../api/userApi'

export const _getMyCart = (userId) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART',
    })
    return getCart(userId)
      .then((response) => {
        const { data } = response
        dispatch({
          type: 'SET_CART',
          payload: { data },
        })
      })
      .catch((error) => {
        console.log('error', error)
        dispatch({
          type: 'CART_ERROR',
        })
      })
  }
}

export const _addToCart = (productId, size, userId, quantity) => {
  const auth = useSelector((state) => state.logForm.isAuthenticated)
  const payload = { product: productId, size, user: userId, quantity }
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART',
    })
    return addToCart(payload)
      .then((res) => {
        dispatch(_getMyCart())
      })
      .catch((err) => {
        console.log('add vao cart loi')
        dispatch({
          type: 'CART_ERROR',
          // payload: {
          //   error: message
          // }
        })
        if (!auth) {
          dispatch({
            type: 'SHOW_LOG_FORM',
          })
        }
      })
  }
}

export const _deleteCartItems = (cartItemIds) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_CART',
    })
    return removeFromCart({ cartItemIds })
      .then((res) => {
        toast.success('Bạn đã xóa sản phẩm khỏi giỏ hàng thành công.', { autoClose: 2000 })
        dispatch(_getMyCart())
      })
      .catch((err) => {
        console.log('xoa sp that bai')
        dispatch({
          type: 'CART_ERROR',
        })
      })
  }
}
