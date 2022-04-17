import { makeAuthRequest } from '../makeApiRequest'
import * as prefix from './prefix'
import query2string from '../../helpers/validating/query2string'
const apiRequest = makeAuthRequest(false)
const { USER_SERVICE_API, COMMON_SERVICE_API, STATISTICS_SERVICE_API } = prefix

export const register = (payload) => {
  return apiRequest({
    url: `${USER_SERVICE_API}/users/`,
    method: 'POST',
    data: payload
  })
}

export const login = (payload) => {
  return apiRequest({
    url: `${USER_SERVICE_API}/users/jwt`,
    method: 'POST',
    data: payload
  })
}

export const getOneProduct = (id) => {
  return apiRequest({
    url: `${COMMON_SERVICE_API}/products/${id}`,
    method: 'GET'
  })
}

export const searchProducts = (query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${COMMON_SERVICE_API}/products/?${queryString}`,
    method: 'GET'
  })
}

export const searchStoreProducts = (store, query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${COMMON_SERVICE_API}/shops/${queryString}`
  })
}

export const getComment = (idProduct) => {
  return apiRequest({
    url: `${COMMON_SERVICE_API}/products/${idProduct}/comments`,
    method: 'GET'
  })
}

export const getFlexPrice = (idProduct, query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${STATISTICS_SERVICE_API}/products/${idProduct}/statistics?${queryString}`,
    method: 'GET'
  })
}

export const getShopInfo = (id) => {
  return apiRequest({
    url: `${COMMON_SERVICE_API}/shops/${id}`,
    method: 'GET'
  })
}

export const getShopProducts = (shopId, search, page, limit) => {
  const payload = { search, page, limit, sort: '-createdAt' }
  const query = query2string(payload)
  return apiRequest({
    url: `${COMMON_SERVICE_API}/shops/${shopId}/products?${query}`,
    method: 'GET'
  })
}
