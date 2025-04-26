import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import "../styles/cardNosotros.css";
import View from "./View";

const CardNosotros = ({ nombre, github, img, legajo }) => {
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card className="card-nosotros">
        <Card.Img variant="top" src={img} className="img-fluid" />
        <Card.Body className="d-grid">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Legajo: {legajo}</Card.Text>
          <a
            href={github}
            target="_blanck"
            className="text-reset w-100 text-decoration-none d-flex align-items-center justify-content-center text-center"
          >
            <Button
              variant="outline-light"
              className="w-100 mb-2 d-flex align-items-center justify-content-center text-center"
            >
              <FaGithub className="mx-2" />
              Github
            </Button>
          </a>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Ver más
          </Button>
        </Card.Body>
      </Card>

      <View show={modalShow} nombre={nombre} github={github} legajo={legajo} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CardNosotros;
