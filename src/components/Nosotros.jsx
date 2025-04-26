import React from "react";
import CardNosotros from "./CardNosotros";

const Nosotros = () => {

  const usuarios = [{
    nombre: "franco",
    github: "github",
    img: "img"
  }];

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-4 mb-5">
          {usuarios.map(({nombre, github, img}, key) => (
            <CardNosotros key={key} nombre={nombre} github={github} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
