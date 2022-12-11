export const getMangas = async (name = '') => {
  const resp = await fetch(`https://api.jikan.moe/v4/manga?q=${name}`); //Obtener kis datos de la api.
  const { data } = await resp.json(); //Convertir la data a un objeto.   //Desestructurarlos
  console.log(data);
  const mangas = data.map( //Mapear los datos para que los organice en un arreglo.
    ({ mal_id, authors, title, images, score, rank, volumes, published }) => ({
      id: mal_id,
      author: authors[0],
      title,
      image: images.jpg.image_url,
      score,
      rank,
      volumes,
      fecha: published.string,
    })
  );
  return mangas;
};
