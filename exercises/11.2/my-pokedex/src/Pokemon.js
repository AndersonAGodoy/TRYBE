import React from 'react';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: {value}, averageWeight: {measurementUnit},  image} = this.props.pokemonInfo;
    
    return(      
      <div className = "Container" >
        <p>{name}, {type}</p> <br/>
        <p>Average Weight: {value} {measurementUnit}</p>
        <img src={image} alt='Pokemons'></img>
      </div>
    ) 
  }
}

export default Pokemon;