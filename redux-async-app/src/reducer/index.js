import {FETCH_SUCCESS,FETCH_FOOD,FETCH_ERROR} from '../actions/index'

export const initialState = {
    food: '',
    isFetching: false,
    error: ''
}

export const reducer = (state= initialState, action) => {

    switch (action.type) {
        case FETCH_FOOD:
            return({...state,isFetching: true, error: ''})
        case FETCH_SUCCESS:
            return({...state,food: action.payload,isFetching: false})
        case FETCH_ERROR:
            return({...state,error: action.payload})    
        default:
            return state;
    }
}