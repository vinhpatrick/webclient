import { toast } from 'react-toastify'
import axiosClient from '../../api/axiosClient'
import { baseUrl } from '../../shared/baseUrl'
import * as ActionTypes from './ActionTypes'
import { _getMyCart } from './cartAction'
export const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds,
  }
}
export const resetLogin = () => {
  return {
    type: ActionTypes.RESET_LOGIN,
  }
}
export const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.data.token,
    userInfo: response.data.user,
  }
}

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  }
}
export const loginUser = (creds) => async (dispatch) => {
  dispatch(requestLogin(creds))
  await axiosClient
    .post(baseUrl + 'users/login', creds)
    .then((response) => {
      toast.success('Bạn đã đăng nhập thành công.', {
        autoClose: 2000,
      })
      const { data } = response
      localStorage.setItem('token', data.token)
      localStorage.setItem('creds', JSON.stringify(creds))
      localStorage.setItem('admin', data.admin)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('address', data.user.address)
      localStorage.setItem('info', JSON.stringify(response.data.user))
      dispatch(receiveLogin(response))
      dispatch(_getMyCart())
    })
    .catch((error) => {
      dispatch(loginError(error.message))
    })
}

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token')
  localStorage.removeItem('creds')
  localStorage.removeItem('admin')
  localStorage.removeItem('userId')
  localStorage.removeItem('address')
  localStorage.removeItem('info')
  dispatch(receiveLogout())
  window.location.href = '/'
}
