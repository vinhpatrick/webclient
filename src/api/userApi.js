import axiosClient from './axiosClient'
export const register = (payload) => {
  return axiosClient({
    url: 'users/signup',
    method: 'POST',
    data: payload,
  })
}

export const getCart = (userId) => {
  return axiosClient({
    url: 'carts',
    method: 'GET',
  })
}

export const addToCart = (payload) => {
  return axiosClient({
    url: 'carts',
    method: 'POST',
    data: payload,
  })
}
