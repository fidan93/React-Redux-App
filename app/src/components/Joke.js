
import React from 'react'

const Joke = (props) => {
const {setup,punchline} = props.joke
    return (
        <div className = "jokeContainer">
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    )
}

export default Joke