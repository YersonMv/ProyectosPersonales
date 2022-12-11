import { useState } from 'react';
import { AddMangas } from './components/AddMangas';
import { MangaGrid } from './components/MangaGrid';

function App() {
  const [name, setName] = useState('');
     //addmangas para recibir el valor que tiene la barra de busqueda, lo actualiza y limpia.
  return (
    <div className="App">
      <AddMangas setName={setName} /> 
      <MangaGrid name={name} />
    </div>
  );
}

export default App;
