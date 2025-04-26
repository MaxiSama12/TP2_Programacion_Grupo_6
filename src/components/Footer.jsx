import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="body">
      <footer>
        <div className="contenedor">
          <div className="row">
            <div className="col" id="company">
              <h2>&#128126;Grupo 6</h2>
              <p>Nuestro grupo esta dedicado al desarrollo de software
                escalable y de calidad, con diseñadores y desarrolladores de primer nivel.
              </p>
            </div>

            <div className="col linksFooter" id="social">
              <h3>Redes Laborales</h3>
              <a target="_BLANK" href="https://www.linkedin.com/in/pruizpesce/">Linkedin Pablo</a> 
              <a target="_BLANK" href="https://www.linkedin.com/in/luzmicaelaponce/">Linkedin Mica</a> 
              <a target="_BLANK" href="https://www.linkedin.com/in/franco-dario-giacobbe/">Linkedin Fran</a> 
              <a target="_BLANK" href="https://www.linkedin.com/in/gabriel-timo-2aa480311/">Linkedin Timo</a> 
              <a target="_BLANK" href="https://www.linkedin.com/in/esteban-maximiliano-samaniego-33b4a3263/">Linkedin Esteban</a> 
              <a target="_BLANK" href="https://www.linkedin.com/in/juan-pablo-morales-018/">Linkedin Juan</a> 
            </div>

            <div className="col linksFooter" id="useful-links">
              <h3>Navegador</h3>
              <a href="#">Home</a>
              <a href="#">Nosotros</a> 
              <a href="#">Login </a>
            </div>
            <div className="col" id="contact">
              <h3>Contacto</h3>
              <p><b>Ubicación de oficinas:</b><br /> San Miguel de Tucumán, Tucumán, Argentina.</p>
              <p><b>Email: </b>grupo6@gmail.com</p>
              <p><b>Teléfono: </b>+54 0381-675-8697</p>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
