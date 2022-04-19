import { login } from '../../services/api/userApi'
import { getUserInformation } from '../../services/api/customerApi'
import { isAuthenticated, setToken, removeToken } from '../../services/makeApiRequest'
import hasPassword from '../../helpers/validating/hashPassword'
import { getLocalData, removeLocalData, setLocalData } from '../../services/StorageServices'
import { useSelector } from 'react-redux'

export const _setStatus = (status = '', error = '') => {
  return (dispatch) =>
    dispatch({
      type: 'LOG_STATUS',
      payload: { status, error },
    })
}

export const _login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_STATUS',
      payload: { status: 'validating', error: '' },
    })
    return login({
      username: username.toLowerCase(),
      password: hasPassword(password),
    })
      .then((response) => {
        const { token } = response.data
        setToken(token)

        dispatch({
          type: 'LOG_STATUS',
          payload: { status: 'success', error: '' },
        })

        // dispatch({
        //   type: 'HIDE_LOG_FORM',
        // })
      })
      .catch((e) => {
        const { message } = e.response.data
        dispatch({
          type: 'LOG_STATUS',
          payload: { status: 'error', error: message },
        })
      })
  }
}

// export const _setUser = () => {
//   return (dispatch) => {
//     dispatch({
//       type: 'LOADING_USER'
//     })

//     return getUserInformation()
//       .then((response) => {
//         const { _id, username, firstName, lastName, roles, address, phoneNumber, email } = response.data.data
//         dispatch({
//           type: 'LOG_IN',
//           payload: { userId: _id, username, firstName, lastName, address, roles, phoneNumber, email }
//         })
//       })
//       .catch((e) => {
//         const { message } = e.response.data
//         dispatch({
//           type: 'LOG_STATUS',
//           payload: { status: 'error', error: message }
//         })
//       })
//   }
// }

// export const _logout = () => {
//   removeToken()
//   return (dispatch) => {
//     dispatch({
//       type: 'LOG_OUT'
//     })
//     window.location.href = '/'
//   }
// }
