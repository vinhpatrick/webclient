import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import logFormReducer from './reducer/logFormReducer'
import userReducer from './reducer/userReducer'

const reducers = combineReducers({
  logForm: logFormReducer,
  user: userReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
