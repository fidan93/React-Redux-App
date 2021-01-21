import axios from 'axios';

export const FETCH_JOKES_START = "FETCH_JOKES_START";
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS";
export const FETCH_JOKES_FAIL = "FETCH_JOKES_FAIL"

export const getJokes = () => dispatch => {

    dispatch({type:FETCH_JOKES_START});

    axios
    .get('https://official-joke-api.appspot.com/jokes/ten')
    .then(res => {
        console.log(res)
         dispatch({type:FETCH_JOKES_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err.response)
        dispatch({type: FETCH_JOKES_FAIL,payload: err.response})
    })
}