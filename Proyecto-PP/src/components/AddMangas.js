import React, { useState } from 'react';

export const AddMangas = ({ setName }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {  //recibe lo que tiene la caja de texto.
    setInputValue(e.target.value); //target(Valor actual del target)
  };
  const handleSubmit = (e) => {     
    e.preventDefault();  //evitar recargar la página.

    if (inputValue.trim().length > 2) {  //Trim quitar los espacios 
      setName(inputValue); //Recibe el valor que tiene la barra de busqueda 
      setInputValue(''); //Se actualiza luego de la busqueda 
    }
  };
                //onsubmit está esperándo para ejecutar la función handleSubmit para actualizar.  
  return (
    <form onSubmit={handleSubmit} className="form-group m-3"> 
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} //Valor actual de la caja de texto.
        className="form-control"
      />
    </form>
  );
};
