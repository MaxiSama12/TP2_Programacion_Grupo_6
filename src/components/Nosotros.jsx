import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardNosotros from "./CardNosotros";

const Nosotros = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
        <div className="col-4 mb-5">
          <CardNosotros />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
