import { createForms } from 'react-redux-form'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import cartReducer from './reducer/cartReducer'
import changeFormReducer from './reducer/changeFormReducer'
import { InitialFeedback } from './reducer/form'
import searchReducer from './reducer/searchReducer'
import changeState from './reducer/sideBarShow'
import userReducer from './reducer/userReducer'


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
