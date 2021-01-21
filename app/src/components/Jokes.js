import React,{useEffect} from 'react';
import {getJokes} from '../actions/index';
import {connect} from 'react-redux'
import Joke from './Joke'

const Jokes = (props) => {
useEffect(()=>{
 props.getJokes()
},[])


const changeJokes = () => {
props.getJokes()
}

if(props.isFetching){
    return(<h3>Loading jokes for you. Please wait ...</h3>)
}

    return(
        <div>
            <h2>Jokes database!</h2>
            {props.errors ? (<h3>Error ocurred</h3>) :
            props.jokes.map(joke => {
                return  <Joke key = {joke.id} joke = {joke}/>
            })
            }
            <button onClick = {changeJokes}>Other jokes</button> 
        </div>
    )
}
 
const mapStateToProps = (state) => {
     return {
        //console.log(state)
        jokes: state.jokes,
        isFetching: state.isFetching,
        errors: state.errors
      };
}
export default connect(mapStateToProps,{getJokes})(Jokes)