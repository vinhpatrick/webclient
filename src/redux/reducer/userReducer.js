import * as ActionTypes from '../action/ActionTypes'

const INIT_STATE = {
  isLoading: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
  userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : '',
  userInfo: {},
  errMess: null,
  address: '',
  test: {},
  email: '',
}

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: false, user: action.creds }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: '',
        userInfo: action.userInfo,
        token: action.token,
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: 'Tài khoản hoặc mật khẩu không chính xác!',
      }
    case ActionTypes.RESET_LOGIN:
      return INIT_STATE
    case ActionTypes.LOGOUT_REQUEST:
      return { ...state, isLoading: true, isAuthenticated: true }
    case ActionTypes.LOGOUT_SUCCESS:
      return { ...state, isLoading: false, isAuthenticated: false, token: '', user: null }
    default:
      return state
  }
}

export default userReducer
