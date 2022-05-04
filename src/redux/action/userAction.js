import * as ActionTypes from './ActionTypes'
// import { login } from '../../api/userApi'
import { baseUrl } from '../../shared/baseUrl'
import axiosClient from '../../api/axiosClient'
import { _hideLogForm, _showLogForm } from '../action/changeFormAction'

export const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds,
  }
}

export const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.data.token,
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
      const { data } = response
      localStorage.setItem('token', data.token)
      localStorage.setItem('creds', JSON.stringify(creds))
      localStorage.setItem('admin', data.admin)
      localStorage.setItem('userId', data.userId)
      localStorage.setItem('address', data.user.address)
      dispatch(receiveLogin(response))
    })
    .catch((error) => {
      dispatch(loginError(error.message))
    })
    .finally((error) => {
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
  dispatch(receiveLogout())
  window.location.href = '/'
}
