import React from "react";
import CardNosotros from "./CardNosotros";

const Nosotros = ({ integrantes }) => {
  return (
    <div className="container">
      <div className="row my-5">
        {integrantes.map(({ nombre, apellido, legajo, github, foto }, key) => (
          <div className="col-4 mb-5" key={key}>
            <CardNosotros
              nombre={nombre + " " + apellido}
              github={github}
              img={foto}
              legajo={legajo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nosotros;
