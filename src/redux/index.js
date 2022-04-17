import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import logFormReducer from './reducer/logFormReducer'

const reducers = combineReducers({
  logForm: logFormReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
