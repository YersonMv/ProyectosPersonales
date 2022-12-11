import { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import { Loading } from './Loading';
export const Pokemons = () => {
  const { pokemons, isLoading } = usePokemon();
  const [currentPage, setCurrenPage] = useState(0);
  const [search, setSearch] = useState('');

  const filtrarPokemons = () => {
    if (search.length === 0) {
      return pokemons.slice(currentPage, currentPage + 12);
    }
    const filtered = pokemons.filter((poke) => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 12);
  };
  const nextPage = () => {
    if (
      pokemons.filter((poke) => poke.name.includes(search)).length >
      currentPage + 12
    ) {
      setCurrenPage(currentPage + 12);
    }
  };
  const prePage = () => {
    if (currentPage > 0) {
      setCurrenPage(currentPage - 12);
    }
  };

  const { name } = search;
  const handleChange = ({ target }) => {
    setCurrenPage(0);
    setSearch(target.value);
  };

  return (
    <div>
      <h1>Buscar</h1>
      <form className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
        />
      </form>
      <button onClick={prePage} className="btn btn-primary m-2">
        LastPage
      </button>
      <button onClick={nextPage} className="btn btn-primary">
        NextPage
      </button>

      <div className="container">
        {filtrarPokemons().map(({ name, pic, id }) => (
          <div key={id} className="content">
            <img src={pic} alt={name} className="" />
            <h3 className="card-title">{name}</h3>
          </div>
        ))}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};
