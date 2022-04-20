import * as ActionTypes from '../action/ActionTypes'

const logFormInitialState = {
  isOpen: false,
  mode: 'login',
}

const changeFormReducer = (state = logFormInitialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOG_FORM: {
      return { ...state, isOpen: true }
    }

    case ActionTypes.HIDE_LOG_FORM: {
      return logFormInitialState
    }

    case ActionTypes.CHANGE_FORM: {
      const { mode } = action.payload
      return { ...state, mode }
    }

    default:
      return state
  }
}

export default changeFormReducer
