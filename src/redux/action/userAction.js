import * as ActionTypes from './ActionTypes'
// import { login } from '../../api/userApi'
import { baseUrl } from '../../shared/baseUrl'
import axiosClient from '../../api/axiosClient'

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
export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds))
  axiosClient
    .post(baseUrl + 'users/login', creds)
    .then((response) => {
      console.log('dang nhap thanh cong')
      const { data } = response
      localStorage.setItem('token', data.token)
      localStorage.setItem('creds', JSON.stringify(creds))
      localStorage.setItem('admin', data.admin)
      localStorage.setItem('userId', data.userId)
      dispatch(receiveLogin(response))
    })
    .catch((error) => dispatch(loginError(error.message)))
}
// export const loginUser = (creds) => (dispatch) => {
//   // We dispatch requestLogin to kickoff the call to the API
//   dispatch(requestLogin(creds))

//   return fetch(baseUrl + 'users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(creds),
//   })
//     .then(
//       (response) => {
//         if (response.ok) {
//           console.log('dang nhap thanh cong')
//           return response
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText)
//           error.response = response
//           throw error
//         }
//       },
//       (error) => {
//         throw error
//       }
//     )
//     .then((response) => response.json())
//     .then((response) => {
//       if (response.success) {
//         // If login was successful, set the token in local storage
//         localStorage.setItem('token', response.token)
//         localStorage.setItem('creds', JSON.stringify(creds))
//         localStorage.setItem('admin', response.admin)
//         localStorage.setItem('userId', response.userId)
//         // Dispatch the success action
//         // dispatch(fetchFavorites());
//         dispatch(receiveLogin(response))
//       } else {
//         var error = new Error('Error ' + response.status)
//         error.response = response
//         throw error
//       }
//     })
//     .catch((error) => dispatch(loginError(error.message)))
// }

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
  dispatch(receiveLogout())
  window.location.href = '/'
}
