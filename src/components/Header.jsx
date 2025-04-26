import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Header.css'
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary header">
      <Container>
        <Navbar.Text href="#home" className='fontHeader textNav'>&#128126;<b>Grupo 6</b></Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto nav">
            <Link to="/" className='links'>Home</Link>
            <Link to="/nosotros" className='links'>Nosotros</Link> 
            <Link to="/login" className='links'>Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;