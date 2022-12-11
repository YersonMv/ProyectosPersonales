import React from 'react';
import { useFetchMangas } from '../hooks/useFetchMangas';

export const MangaGrid = ({ name }) => {
  const { data, loading } = useFetchMangas(name);

  return (
    <div>
      <h2>{name}</h2>
      {loading && <p className="alert alert-danger">Loading...</p>}
      {data.map(({ id, author, title, image, score, rank, volumes, fecha }) => ( // retornando para mostrar en pantalla.
        <div className= "mangas" key={id}>
          <img src={image} alt={title} />
          <h5>{title}</h5>
          <p>Score: {score}</p>
          <p>Rank: {rank}</p>
          <p>volumes: {volumes}</p>
          <p>fecha: {fecha}</p>
        </div>
      ))}
    </div>
  );
};
