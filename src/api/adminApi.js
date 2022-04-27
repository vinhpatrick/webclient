import axiosClient from './axiosClient'
import query2string from '../helpers/validating/query2string'

export const getProduct = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/products/?${queryString}`,
    method: 'GET',
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
export const getOrder = () => {
  return axiosClient({
    url: '/admin/orders',
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