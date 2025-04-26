import React, { useState } from "react";
import Nosotros from "./Nosotros";
import "bootstrap/dist/css/bootstrap.min.css";

function Main({ integrantes }) {
  const [equipo, setEquipo] = useState(integrantes);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    apellido: "",
    legajo: "",
    github: "",
    foto: "",
  });

  const handleChange = (e) => {
    setNuevo({
      ...nuevo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEquipo([...equipo, nuevo]);
    setNuevo({ nombre: "", apellido: "", legajo: "", github: "", foto: "" });
  };

  return (
    <div className="container">
      <h2>Agregar integrante</h2>

      <form className="row" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6 m-3">
            <input
              className="form-control"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={nuevo.apellido}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 m-3">
            <input
              className="form-control"
              type="text"
              name="legajo"
              placeholder="Legajo"
              value={nuevo.legajo}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="text"
              name="github"
              placeholder="GitHub"
              value={nuevo.github}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="text"
              name="foto"
              placeholder="URL de foto"
              value={nuevo.foto}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="btn btn-dark" type="submit">
          Agregar
        </button>
      </form>

      <Nosotros integrantes={equipo} />
    </div>
  );
}

export default Main;
