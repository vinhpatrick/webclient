import { combineReducers } from 'redux'
import Products from './product'

const rootReducer = combineReducers({
    product: Products
})
export default rootReducer;