import Pokemon from './Pokemon';
import AllPokemons from './Data';
import React from 'react';

class App extends React.Component {
  state = {
    pokemons: [],
  }

  async componentDidMount() {
    const response = await AllPokemons()
    console.log(response);
    this.setState({pokemons: response})
  }
  
  render() {
    const { pokemons } = this.state
    return (
     <main>
      <h1>Pokedex</h1>
      <ul>
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} data={pokemon} />)}
      </ul>
    </main>
    )
  }
} 

export default App;
