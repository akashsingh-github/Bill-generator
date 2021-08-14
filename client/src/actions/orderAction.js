import {
    UPDATE_SINGLE_ORDER,
    ADD_MOBILE_ORDER, 
    GET_ORDER_LIST, 
    GET_SINGLE_ORDER,
    CLEAR_ORDER_DETAILS,
    DELETE_ORDER
} from '../constants/actionType';
var UNIVERSAL  = {
    BASEURL: "localhost:8020/"
}

import {set_snack_bar} from './snackBar';
import {setLoader, unsetLoader} from './loader';

export const addMobileOrder = (payload) => ({
    type: ADD_MOBILE_ORDER,
    payload
})

export const clearOrderDetails = () => ({
    type: CLEAR_ORDER_DETAILS
})

export const getOrderList = () => ({
    type: GET_ORDER_LIST
})

export const getSingleOrder = (id) => ({
    type: GET_SINGLE_ORDER,
    payload: id
})

export const updateSingleOrder = (payload) => ({
    type: UPDATE_SINGLE_ORDER,
    payload
})

export const deleteOrder = (id) => ({
    type: DELETE_ORDER,
    payload: id
})