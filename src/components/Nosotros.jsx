import React from "react";
import CardNosotros from "./CardNosotros";

const Nosotros = ({ integrantes }) => {
  return (
    <div className="container mb-5">
      <div className="p-4 rounded-4">
        <hr />
        <h2 className="text-center my-4">Integrantes</h2>
        <div className="row my-5">
          {integrantes.map(
            ({ nombre, apellido, legajo, github, foto }, key) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={key}>
                <CardNosotros
                  nombre={nombre + " " + apellido}
                  github={github}
                  img={foto}
                  legajo={legajo}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
