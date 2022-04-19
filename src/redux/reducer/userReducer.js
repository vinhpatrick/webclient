const userInitialState = {
  loading: false,
  status: '',
  username: '',
  firstName: '',
  lastName: '',
  error: '',
}

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOADING_USER': {
      return { ...state, loading: true }
    }
    case 'LOG_IN': {
      const { username, firstName, lastName } = action.payload
      return {
        loading: false,
        username,
        firstName,
        lastName,
        error: '',
      }
    }
    case 'LOG_OUT': {
      return userInitialState
    }
    case 'LOG_STATUS': {
      const { status, error } = action.payload
      return { ...state, loading: false, status, error }
    }
    default:
      return state
  }
}

export default userReducer
