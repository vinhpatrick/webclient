import { makeAuthRequest } from '../makeApiRequest'
import * as prefix from './prefix'
import query2string from '../../helpers/validating/query2string'
const apiRequest = makeAuthRequest(true)
const { USER_SERVICE_API, CUSTOMER_SERVICE_API, SELLER_SERVICE_API } = prefix

export const getUserInformation = () => {
  return apiRequest({
    url: `${USER_SERVICE_API}/users/self`,
    method: 'GET'
  })
}

export const toBeSeller = () => {
  return apiRequest({
    url: `${SELLER_SERVICE_API}/sellers`,
    method: 'POST'
  })
}

export const addToCart = (payload) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items`,
    method: 'POST',
    data: payload
  })
}

export const getCart = () => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items`,
    method: 'GET'
  })
}

export const editCartItem = (payload) => {
  const { cartItemId, ...data } = payload
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items/${cartItemId}`,
    method: 'PUT',
    data
  })
}

export const removeFromCart = (payload) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/cart-items`,
    method: 'DELETE',
    data: payload
  })
}

export const postComment = (payload) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/comments`,
    method: 'POST',
    data: payload
  })
}

export const deleteComment = (idComment) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/comments/${idComment}`,
    method: 'DELETE'
  })
}

export const order = ({ cartItems, receivingAddress }) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders`,
    method: 'POST',
    data: {
      cartItems,
      receivingAddress
    }
  })
}

export const getOrder = (query) => {
  const queryString = query2string(query)
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders?${queryString}`,
    method: 'GET'
  })
}

export const cancelOrder = (idOrder) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders/${idOrder}/status/cancel`,
    method: 'PUT'
  })
}

export const confirmOrder = (idOrder) => {
  return apiRequest({
    url: `${CUSTOMER_SERVICE_API}/orders/${idOrder}/status/confirm-received`,
    method: 'PUT'
  })
}

export const changePassword = ({ oldPassword, newPassword }) => {
  const payload = { oldPassword, newPassword }
  return apiRequest({
    url: `${USER_SERVICE_API}/users/self/password`,
    method: 'PUT',
    data: payload
  })
}

export const changeInformation = ({ firstName, lastName, phoneNumber, email, address }) => {
  const payload = { firstName, lastName, phoneNumber, email, address }
  return apiRequest({
    url: `${USER_SERVICE_API}/users/self`,
    method: 'PUT',
    data: payload
  })
}
