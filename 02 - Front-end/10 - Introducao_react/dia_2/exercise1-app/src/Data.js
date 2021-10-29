const fetchItem = (num) => {
  const result = fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((json) => json.json())
  return result
};

const AllPokemons = async () => {
  const allThen = []
  for (let index = 1; index <= 1118; index++) {
    allThen.push(await fetchItem(index).then((eachPokemon) => eachPokemon))
    if (index === 151) {
      return allThen
    }
  }
}

export default AllPokemons