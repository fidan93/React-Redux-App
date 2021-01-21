import {FETCH_JOKES_START,FETCH_JOKES_SUCCESS,FETCH_JOKES_FAIL} from '../actions/'

const initialState = {
    jokes:[],
    isFetching:false,
    errors: ''
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case FETCH_JOKES_START:
            return({...state,isFetching:true, errors:''})
        case FETCH_JOKES_SUCCESS:
            return ({...state, isFetching:false, jokes: action.payload});
        case FETCH_JOKES_FAIL:
            return ({...state,isFetching: false, errors: action.payload})
        default:
            return state;
    }
}

export default reducer;