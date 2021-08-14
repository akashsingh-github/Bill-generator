import {
    UPDATE_SINGLE_ORDER,
    ADD_MOBILE_ORDER,
    GET_ORDER_LIST, 
    GET_SINGLE_ORDER
} from '../constants/actionType';

const LOADER = 'LOADER';

const initialState = {
    orderList = [],
    mobileOrderDetail = {},
    loading: false
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case ADD_MOBILE_ORDER : {
            return{
                ...state,
                mobileOrderDetail: {...state.mobileOrderDetail, ...action.payload},
            }
        }
        case UPDATE_SINGLE_ORDER: {
            return{
                ...state,
                mobileOrderDetail: {...state.mobileOrderDetail, ...action.payload}
            }
        }

        case LOADER: {
            return{
                ...state,
                LOADER: false
            }
        }

        default: 
            return state
    }
}