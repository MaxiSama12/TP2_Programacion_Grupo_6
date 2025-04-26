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
      <div className="justify-content-center  ">
        <h2 className="text-center mt-4">Agregar integrante</h2>
        <form className="row w-100 px-5" onSubmit={handleSubmit}>
          <div className="col-6 p-5">
            <input
              className="form-control mb-3"
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={handleChange}
            />
            <input
              className="form-control mb-3"
              type="text"
              name="legajo"
              placeholder="Legajo"
              value={nuevo.legajo}
              onChange={handleChange}
            />
            <input
              className="form-control mb-3"
              type="text"
              name="foto"
              placeholder="URL de foto"
              value={nuevo.foto}
              onChange={handleChange}
            />
          </div>
          <div className="col-6 p-5">
            <input
              className="form-control mb-3"
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={nuevo.apellido}
              onChange={handleChange}
            />
            <input
              className="form-control mb-3"
              type="text"
              name="github"
              placeholder="GitHub"
              value={nuevo.github}
              onChange={handleChange}
            />

            <button className="btn btn-dark mx-2" type="submit">
              Agregar
            </button>
          </div>
        </form>
      </div>
      <Nosotros integrantes={equipo} />
    </div>
  );
}

export default Main;
