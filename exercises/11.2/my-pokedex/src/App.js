import React from "react";
import data from "./data";
import Pokemon from "./Pokemon";
import Button from './MyButton';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: data,
      index: 0,
    };
  }

  setFilterValue = (event) => {
    this.setState({
      index: 0,
      filter: data.filter((pokemon) => (event.target.value === 'All') ? data : pokemon.type === event.target.value),
    });
  };

  NextPokemon = () => {
    this.setState({
      index:
        this.state.index === this.state.filter.length - 1
          ? 0
          : this.state.index + 1,
    });
  };

  PreviousPokemon = () => {
    this.setState({
      index:
        this.state.index === 0
          ? this.state.filter.length - 1
          : this.state.index - 1,
    });
  };

  render() {
    const pokemonTypes = ['All'];
    data.forEach((poke) =>
      pokemonTypes.includes(poke.type) ? 0 : pokemonTypes.push(poke.type)
    );
    return (
      <div className="App">
        <h1>My Pokedex</h1>
        <Pokemon pokemonInfo = {this.state.filter[this.state.index]} />
        <Button funcao={this.PreviousPokemon} text='Previous' />
        <Button funcao={this.NextPokemon} text='Next' />
        <br></br>
        {pokemonTypes.map( type => 
          <Button funcao={this.setFilterValue} text={type} />
        )}
      </div>
    );
  }
}

export default App;
