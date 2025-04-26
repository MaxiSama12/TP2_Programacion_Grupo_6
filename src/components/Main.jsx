import React, { useState } from 'react';
import Nosotros from './Nosotros';
import "bootstrap/dist/css/bootstrap.min.css";

function Main({ integrantes }) {
  const [equipo, setEquipo] = useState(integrantes);
  const [nuevo, setNuevo] = useState({
    nombre: '',
    apellido: '',
    legajo: '',
    github: '',
    foto: ''
  });

  const handleChange = (e) => {
    setNuevo({
      ...nuevo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h2>Agregar integrante</h2>

      <form>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={nuevo.apellido}
          onChange={handleChange}
        />
        <input
          type="text"
          name="legajo"
          placeholder="Legajo"
          value={nuevo.legajo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub"
          value={nuevo.github}
          onChange={handleChange}
        />
        <input
          type="text"
          name="foto"
          placeholder="URL de foto"
          value={nuevo.foto}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>

      <Nosotros integrantes={equipo} />
    </div>
  );
}

export default Main;