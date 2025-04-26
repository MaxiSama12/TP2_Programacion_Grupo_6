import React, { useState } from "react";
import Nosotros from "./Nosotros";
import View from "./View"
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css"

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
    <div className="container my-5 ">
      <div className="card shadow-lg p-4 rounded-4 cont-principal">
        <h2 className="text-center mb-4">Agregar integrante</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Nombre</label>
              <input
                className="form-control"
                type="text"
                name="nombre"
                value={nuevo.nombre}
                onChange={handleChange}
                placeholder="Ingrese nombre"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Apellido</label>
              <input
                className="form-control"
                type="text"
                name="apellido"
                value={nuevo.apellido}
                onChange={handleChange}
                placeholder="Ingrese apellido"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Legajo</label>
              <input
                className="form-control"
                type="text"
                name="legajo"
                value={nuevo.legajo}
                onChange={handleChange}
                placeholder="Ingrese legajo"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">GitHub</label>
              <input
                className="form-control"
                type="text"
                name="github"
                value={nuevo.github}
                onChange={handleChange}
                placeholder="Link de GitHub"
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Foto (URL)</label>
              <input
                className="form-control"
                type="text"
                name="foto"
                value={nuevo.foto}
                onChange={handleChange}
                placeholder="URL de la foto"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-dark px-5" type="submit">
              Agregar integrante
            </button>
          </div>
        </form>
        <Nosotros integrantes={equipo} />
        <View />
      </div>
    </div>
  );
}

export default Main;
