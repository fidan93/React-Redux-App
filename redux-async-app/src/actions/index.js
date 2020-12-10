import axios from 'axios'

export const FETCH_FOOD = 'FETCH_FOOD'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = "FETCH_ERRROR "

export const getFood = () => (dispatch) =>{
    dispatch({type: FETCH_FOOD})

    axios
    .get('https://foodish-api.herokuapp.com/api/')
    .then(res=>{
        console.log(res)
        dispatch({type: FETCH_SUCCESS,payload:res.data.image})
    })
    .catch(err=>{
        dispatch({type:FETCH_ERROR,payload:err.response.message})
    })

}
//https://foodish-api.herokuapp.com/api/

export const findFood = (value) => (dispatch) => {
    dispatch({type: FETCH_FOOD})

    axios
    .get(`https://foodish-api.herokuapp.com/api/images/${value}`)
    .then(res=>{
        console.log(res)
        dispatch({type: FETCH_SUCCESS,payload:res.data.image})
    })
    .catch(err=>{
        dispatch({type:FETCH_ERROR,payload:err.response.message})
    })

}