import * as ActionTypes from '../action/ActionTypes'

const Products = (
    state = { isLoading: true, errMess: null, products: [] },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload,
            }
        case ActionTypes.PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                products: []
            }
        case ActionTypes.PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload,
                products: []
            }

        default:
            return state;
    }
}
export default Products;