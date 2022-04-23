import thunk from 'redux-thunk'
import { createForms } from 'react-redux-form'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import loginReducer from './reducer/loginReducer'
import changeFormReducer from './reducer/changeFormReducer'
import cartReducer from './reducer/cartReducer'
import { InitialFeedback } from './reducer/form'

const reducers = combineReducers({
  logForm: loginReducer,
  changeForm: changeFormReducer,
  cart: cartReducer,
  ...createForms({
    feedback: InitialFeedback,
  }),
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
