import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const CardNosotros = ({nombre, github, img}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="d-grid">
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Legajo: 48600</Card.Text>
          <a href={github} className="text-reset w-100 text-decoration-none d-flex align-items-center justify-content-center text-center">
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
