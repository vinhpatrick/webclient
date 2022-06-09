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
//order
export const order = (payload) => {
  return axiosClient({
    url: `/orders`,
    method: 'POST',
    data: payload,
  })
}

export const getOrder = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/orders?${queryString}`,
    method: 'GET',
  })
}
export const confirmOrder = (orderId) => {
  return axiosClient({
    url: `/orders/${orderId}/status/confirm-received`,
    method: 'PUT',
  })
}
export const cancelOrder = (orderId) => {
  return axiosClient({
    url: `/orders/${orderId}/status/cancel`,
    method: 'PUT',
  })
}



//

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


export const addToWishlist = (payload) => {
  return axiosClient({
    url: `/favorites`,
    method: 'POST',
    data: payload,
  })
}
export const getWishlist = (payload) => {
  return axiosClient({
    url: '/favorites',
    method: 'GET',
    data: payload,
  })
}
export const deleteWishList = (productId) => {
  return axiosClient({
    url: `/favorites/${productId}`,
    method: 'DELETE',
  })
}

export const postFeedback = (payload) => {
  return axiosClient({
    url: '/feedback',
    method: 'POST',
    data: payload,
  })
}
export const changeInfomation = ({ firstname, lastname, phoneNumber, email, address }) => {
  const payload = { firstname, lastname, phoneNumber, email, address }
  return axiosClient({
    url: '/users/updateSelf',
    method: 'PUT',
    data: payload,
  })
}

export const changePassword = ({ oldPassword, newPassword }) => {
  const payload = { oldPassword, newPassword }
  return axiosClient({
    url: 'users/changepassword',
    method: 'PUT',
    data: payload,
  })
}

export const getFlexPrice = (productId, query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/statistics/products/${productId}?${queryString}`,
    method: 'GET',
  })
}

export const getRevenueCustomer = (userId, query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `statistics/order-statistics/${userId}?${queryString}`,
    method: 'GET',
  })
}