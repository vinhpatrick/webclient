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
export const deleteProduct = (productId) => {
  return axiosClient({
    url: `/products/${productId}`,
    method: 'DELETE',
  })
}
