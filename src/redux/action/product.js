import *as ActionTypes from './ActionTypes';
import { baseUrl } from '../../shared/baseUrl'

export const fetchProducts = (dispatch) => {
    dispatch(productsLoading(true));
    return fetch(baseUrl + 'products')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Err' + response.status + ":" + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(products => dispatch(addProducts(products)))
        .catch(error => dispatch(productsFailed(error.message)));
}
export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});
export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});
export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
})