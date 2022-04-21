import axiosClient from './axiosClient'
import { baseUrl } from '../shared/baseUrl'

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
