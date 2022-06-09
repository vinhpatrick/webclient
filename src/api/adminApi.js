import axiosClient from './axiosClient'
import query2string from '../helpers/validating/query2string'

export const getProduct = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/products/?${queryString}`,
    method: 'GET',
  })
}
export const addProduct = (payload) => {
  return axiosClient({
    url: '/products',
    method: 'POST',
    data: payload,
  })
}

export const updateProduct = (productId, payload) => {
  return axiosClient({
    url: `/products/${productId}`,
    method: 'PUT',
    data: payload,
  })
}
export const deleteProduct = (payload) => {
  return axiosClient({
    url: '/products',
    method: 'DELETE',
    data: payload,
  })
}
export const getOrder = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/admin/orders?${queryString}`,
    method: 'GET',
  })
}

export const confirmOrder = (orderId) => {
  return axiosClient({
    url: `/admin/orders/${orderId}/status/confirm`,
    method: 'PUT',
  })
}
export const cancelOrder = (orderId) => {
  return axiosClient({
    url: `/admin/orders/${orderId}/status/cancel`,
    method: 'PUT',
  })
}

export const getUsers = () => {
  return axiosClient({
    url: '/users/',
    method: 'GET',
  })
}

export const getFeedBacks = () => {
  return axiosClient({
    url: '/feedback',
    method: 'GET',
  })
}

export const getRevenue = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `statistics/order-statistics?${queryString}`,
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