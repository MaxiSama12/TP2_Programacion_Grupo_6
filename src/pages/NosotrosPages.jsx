import React from "react";
import Nosotros from "../components/Nosotros";
import "../styles/main.css";

const NosotrosPages = ({ integrantes }) => {
  return (
    <div className="card shadow-lg p-4 rounded-4 my-5 container cont-principal">
      <Nosotros integrantes={integrantes} />
    </div>
  );
};

export default NosotrosPages;
