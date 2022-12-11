export const fetchPokemon = async (url) => {
  const data = await fetch(url);
  const { results } = await data.json();
  return results;
};
