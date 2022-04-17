import { makeAuthRequest } from '../makeApiRequest'
import query2string from '../../helpers/validating/query2string'
const apiRequest = makeAuthRequest(true)
const urlUser = '/user-service/api'
const urlAdmin = '/admin-service/api'
const urlStatistics = '/statistics-service/api'
export const getUsers = (query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlUser}/users?${queryString}`,
    method: 'GET',
  })
}

export const putActiveUser = (idUser, payload) => {
  return apiRequest({
    url: `${urlUser}/users/${idUser}`,
    method: 'PUT',
    data: payload,
  })
}

export const deleteUser = (idUser) => {
  return apiRequest({
    url: `${urlUser}/users/${idUser}`,
    method: 'DELETE',
  })
}

export const getShops = (query) => {
  const queryString = ''
  if (query != null) {
    const queryString = query2string(query)
  }

  return apiRequest({
    url: `${urlAdmin}/shops?${queryString}`,
    method: 'GET',
  })
}

export const putApproved = (idShop, payload) => {
  return apiRequest({
    url: `${urlAdmin}/shops/${idShop}/approval`,
    method: 'PUT',
    data: payload,
  })
}

export const putActiveShop = (idShop, payload) => {
  return apiRequest({
    url: `${urlAdmin}/shops/${idShop}/active-status`,
    method: 'PUT',
    data: payload,
  })
}

export const deleteShop = (idShop) => {
  return apiRequest({
    url: `${urlAdmin}/shops/${idShop}`,
    method: 'DELETE',
  })
}

export const getRevenue = (query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlStatistics}/order-statistics?${queryString}`,
    method: 'GET',
  })
}

export const getRevenueSeller = (idSeller, query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlStatistics}/sellers/${idSeller}/order-statistics?${queryString}`,
    method: 'GET',
  })
}

export const getRevenueShop = (idShop, query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlStatistics}/shops/${idShop}/order-statistics?${queryString}`,
    method: 'GET',
  })
}

export const getRevenueCustomer = (idCustomer, query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${urlStatistics}/customers/${idCustomer}/order-statistics?${queryString}`,
    method: 'GET',
  })
}
