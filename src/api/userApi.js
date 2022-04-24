import axiosClient from './axiosClient'



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
  const { cartItemId, ...data } = payload
  return axiosClient({
    url: `/carts/${cartItemId}`,
    method: 'PUT',
    data,
  })
}

export const handleAddToWishlist = (payload) => {
  // return axiosClient({
  //   url:''
  // })
}

