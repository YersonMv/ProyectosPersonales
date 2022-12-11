import { useEffect, useState } from 'react';
import { pokemonsArr } from '../helpers/pokemonsArr';

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    pokemonsArr().then((pokemons) => {
      setIsLoading(false);
      setPokemons(pokemons);
    });
    return () => {};
  }, []);
  return { pokemons, isLoading };
};
