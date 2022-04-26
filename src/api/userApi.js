import axiosClient from './axiosClient'
import query2string from '../helpers/validating/query2string'

export const login = (payload) => {
  axiosClient({
    url: '/users/login',
    method: 'POST',
    data: payload,
  })
}

export const register = (payload) => {
  return axiosClient({
    url: '/users/signup',
    method: 'POST',
    data: payload,
  })
}

export const getCart = (userId) => {
  return axiosClient({
    url: '/carts',
    method: 'GET',
  })
}

export const addToCart = (payload) => {
  return axiosClient({
    url: '/carts',
    method: 'POST',
    data: payload,
  })
}

export const removeFromCart = (payload) => {
  return axiosClient({
    url: '/carts',
    method: 'DELETE',
    data: payload,
  })
}
export const editCartItem = (payload) => {
  const { cartId, ...data } = payload
  return axiosClient({
    url: `/carts/${cartId}`,
    method: 'PUT',
    data,
  })
}

export const order = ({ cartItems, receivingAddress }) => {
  return axiosClient({
    url: `/orders`,
    method: 'POST',
    data: {
      cartItems,
      receivingAddress,
    },
  })
}

export const searchProducts = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/products/?${queryString}`,
    method: 'GET',
  })
}

export const getComment = (productId) => {
  return axiosClient({
    url: '/comments',
    method: 'GET',
  })
}
export const postComment = (payload) => {
  return axiosClient({
    url: '/comments',
    method: 'POST',
    data: payload,
  })
}
export const deleteComment = (commentId) => {
  return axiosClient({
    url: `/comments/${commentId}`,
    method: 'DELETE',
  })
}


export const handleAddToWishlist = (payload) => {
  // return axiosClient({
  //   url:''
  // })
}

