import axiosClient from './axiosClient'
import query2string from '../helpers/validating/query2string'

//get all
export const getProduct = () => {
  return axiosClient({
    url: '/products',
    method: 'GET',
  })
}

export const postProduct = (payload) => {
  const token = 'Bearer' + localStorage.getItem('token')
  return axiosClient({
    url: '/products',
    method: 'POST',
    data: payload,
  })
}

export const searchProducts = (query) => {
  const queryString = query2string(query)
  return axiosClient({
    url: `/products/?${queryString}`,
    method: 'GET',
  })
}

export const getProductById = (id) => {
  return axiosClient({
    url: `/products/${id}`,
    method: 'GET',
  })
}