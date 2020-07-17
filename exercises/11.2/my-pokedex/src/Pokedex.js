import React from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends React.Component {
  render() {
    const pokemons = data.map(poke => <Pokemon pokemonInfo={ poke } />)

    return (
      <div>
        {pokemons}
      </div>
    )
  }
}

export default Pokedex;