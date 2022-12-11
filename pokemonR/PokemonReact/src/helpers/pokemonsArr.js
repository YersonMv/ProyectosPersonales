import { fetchPokemon } from './fetchPokemon';

export const pokemonsArr = async () => {
  const data = fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=1200');
  const pokemon = await data;
  const pokemonArr = pokemon.map((poke) => {
    const pokeArr = poke.url.split('/');
    const id = pokeArr[6];
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return {
      name: poke.name,
      pic,
      id,
    };
  });
  return pokemonArr;
};
