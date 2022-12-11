import { useEffect, useState } from 'react';
import { getMangas } from '../helpers/getMangas';

export const useFetchMangas = (name) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {  //Solamente se recarga cuando el nombre cambie.
    getMangas(name).then((data) => { // Es una promesa es decir que recibió los datos.
      setState({
        data,    
        loading: false,
      });
    });
  }, [name]); //estado en el que va a estar el use state.
  return state;
};
