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

  return (
    <div className="container">
      <h2>Agregar integrante</h2>

      <form>
        <input type="text" name="nombre" placeholder="Nombre" />
        <input type="text" name="apellido" placeholder="Apellido" />
        <input type="text" name="legajo" placeholder="Legajo" />
        <input type="text" name="github" placeholder="GitHub" />
        <input type="text" name="foto" placeholder="URL de foto" />
        <button type="submit">Agregar</button>
      </form>

      <Nosotros integrantes={equipo} />
    </div>
  );
}

export default Main;