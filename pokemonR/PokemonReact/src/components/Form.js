import React, { useState } from 'react';

export const Form = () => {
  const [search, setName] = useState({
    name: '',
  });
  const { name } = search;
  const handleChange = ({ target }) => {
    setName({
      ...search,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div>
      <form className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
        />
        <button className="btn btn-primary mt-2" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
    </div>
  );
};
