import React,{useEffect} from 'react';
import {getFood,findFood} from '../actions'
import {connect} from 'react-redux'
import styled from 'styled-components';

const Container = styled.div`
margin: 0 auto;
width: 80%;
display:flex;
flex-direction: column;
align-items: center;

div{
    width: 100%;
    margin: 2% auto;
}
div img{
    width:100%;
}
select{
    width: 150px;
    height: 35px;
    font-size:1.1rem;
    border: none;
    background-color: whitesmoke;
    padding:0 1% 0 1%;
    outline: none;
}

button{
    height: 40px;
    border:none;
    background-color:goldenrod;
    color: white;
    font-size: 1.1rem;
    padding: 0 2%;
    border-radius: 5px;
    box-shadow:  0 4px 5px rgba(68, 68, 68, 0.6);
    outline:none;
}
button:hover {
background-color: silver;
}
`
const Food = (props)=>{

    useEffect(()=>{
     props.getFood()
    },[])

    const handleChange = (e) =>{
      console.log(e.target.value)
      props.findFood(e.target.value)
    }

    const pickRandom = (e) => {
     props.getFood()
    }

return(

<Container>
    <div>
    <select onChange={handleChange}>
        <option >Select</option>
        <option value="dosa">Dosa</option>
        <option value="burger">Burger</option>
        <option value="biryani">Biryani</option>
        <option value="idly">Idly</option>
        <option value="pizza">Pizza</option>
    </select>
    </div>

    <div><img  src={props.food} alt="food"/></div>
    <div>
    <button onClick={pickRandom}>Pick another random photo</button>
    </div>
</Container>
)
}

const mapStateToProps=(state)=>{
    console.log(state)
    return {
        food: state.food
    }
  }
  

export default connect(mapStateToProps,{getFood,findFood})(Food);