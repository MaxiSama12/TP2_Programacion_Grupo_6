import React from "react";
// import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function View(props) {
  // const location = useLocation();
  // const integrante = location.state; // Contiene el objeto del integrante que fue pasado desde otra página

  // // Si no hay integrante, muestra un mensaje
  // if (!integrante) {
  //   return (
  //     <p className="text-center  mt-5">No se encontro ningun integrante.</p>
  //   );
  // }

 

  return (
    <>
      {/* <div className="container text-center py-5">
        <h2 className="mb-4">
          {integrante.nombre} {integrante.apellido}
        </h2>

        <img
          src={integrante.foto}
          alt={`${integrante.nombre} ${integrante.apellido}`}
          className="rounded-circle mb-4"
          width="150"
          height="150"
          style={{ objectFit: "cover" }}
        />

        <p>
          <strong>Legajo:</strong>
          {integrante.legajo}
        </p>
        <p>
          <a
            href={integrante.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info mt-3"
          >
            Ver GitHub
          </a>
        </p>
      </div> */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Legajo: {props.legajo}</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default View;
