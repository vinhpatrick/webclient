import thunk from 'redux-thunk'
import { createForms } from 'react-redux-form'
import { combineReducers, createStore, applyMiddleware } from 'redux'

import userReducer from './reducer/userReducer'
import changeFormReducer from './reducer/changeFormReducer'
import cartReducer from './reducer/cartReducer'
import searchReducer from './reducer/searchReducer'
import { InitialFeedback } from './reducer/form'
import changeState from './reducer/sideBarShow'

const reducers = combineReducers({
  logForm: userReducer,
  changeForm: changeFormReducer,
  cart: cartReducer,
  search: searchReducer,
  sidebarShow: changeState,
  ...createForms({
    feedback: InitialFeedback,
  }),
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
