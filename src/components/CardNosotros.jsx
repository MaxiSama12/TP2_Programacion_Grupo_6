import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import "../styles/cardNosotros.css";

const CardNosotros = ({ nombre, github, img, legajo }) => {
  return (
    <>
      <Card>
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
              variant="outline-dark"
              className="w-100 mb-2 d-flex align-items-center justify-content-center text-center"
            >
              <FaGithub className="mx-2" />
              Github
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardNosotros;
