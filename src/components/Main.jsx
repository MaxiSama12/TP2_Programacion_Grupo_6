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

  const handleSubmit = (e) => {
    e.preventDefault();
    setEquipo([...equipo, nuevo]);
    setNuevo({ nombre: '', apellido: '', legajo: '', github: '', foto: '' });
  };

  return (
    <div>
      <h1 className="text-center mt-4">Bienvenidos al Grupo 6</h1>
      {/* <div className="row">
        {integrantes.map((integrante, index) => (
          <div key={index} className="col-12 col-md-4">
            <div className="text-center">
              {/* Aquí aplicamos las clases de Bootstrap 
              <img
                src={integrante.foto}
                alt={`${integrante.nombre} ${integrante.apellido}`}
                className="img-fluid rounded"  // Clase de Bootstrap para tamaño y bordes redondeados
              />
              <h3>{integrante.nombre} {integrante.apellido}</h3>
              <p>Legajo: {integrante.legajo}</p>
              <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                Ver GitHub
              </a>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Main;